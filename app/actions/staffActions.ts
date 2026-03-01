"use server";

import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getStaff() {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        staffProfile: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const targetEmail = 'poweldayck@gmail.com';
    const staff = allUsers.filter(user => {
      const isStaff = user.staffProfile !== null || 
                     (['ADMIN', 'SUPER_ADMIN', 'CONSULTANT'] as string[]).includes(user.role);
      const isTarget = user.email.toLowerCase().trim() === targetEmail;
      return isStaff || isTarget;
    });

    return { 
      count: allUsers.length, 
      result: JSON.parse(JSON.stringify(staff)) 
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error fetching staff:", error);
    return { count: 0, result: [], error: message };
  }
}

export async function updateStaffRole(id: string, role: string) {
  try {
    const updated = await prisma.user.update({
      where: { id },
      data: { role: role as Role }
    });
    return { success: true, user: JSON.parse(JSON.stringify(updated)) };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating staff role:", error);
    return { success: false, error: message };
  }
}

export async function toggleStaffStatus(id: string, isActive: boolean) {
  try {
    const updated = await prisma.staffProfile.upsert({
      where: { userId: id },
      update: { isActive },
      create: { 
        userId: id, 
        isActive,
        jobTitle: "Staff Member" // Default for new profile
      }
    });
    return { success: true, profile: JSON.parse(JSON.stringify(updated)) };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error toggling staff status:", error);
    return { success: false, error: message };
  }
}

export async function deleteStaff(id: string) {
  try {
    await prisma.user.delete({
      where: { id }
    });
    return { success: true };
  } catch (error: unknown) {
    console.error("Error deleting staff:", error);
    
    // P2003 is Prisma's error code for foreign key constraint violation
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2003') {
      return { 
        success: false, 
        error: "Cannot delete this staff member because they have associated records (bookings, payments, etc.). Try deactivating them instead." 
      };
    }
    
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}

export async function createStaff(data: { firstName: string, lastName: string, email: string, role: string }) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
      include: { staffProfile: true }
    });

    if (existingUser) {
      if (existingUser.staffProfile) {
        return { success: false, error: "A staff member with this email already exists." };
      }

      // User exists but is not a staff member, upgrade them
      const updatedUser = await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          role: data.role as Role,
          staffProfile: {
            upsert: {
              update: {
                isActive: true,
                jobTitle: data.role === 'CONSULTANT' ? 'Travel Consultant' : 'Staff Member'
              },
              create: {
                isActive: true,
                jobTitle: data.role === 'CONSULTANT' ? 'Travel Consultant' : 'Staff Member'
              }
            }
          }
        },
        include: { staffProfile: true }
      });
      return { success: true, user: JSON.parse(JSON.stringify(updatedUser)), message: "Existing user upgraded to staff." };
    }

    // New user creation
    const user = await prisma.user.create({
      data: {
        clerkId: `manual_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role as Role,
        staffProfile: {
          create: {
            isActive: true,
            jobTitle: data.role === 'CONSULTANT' ? 'Travel Consultant' : 'Staff Member'
          }
        }
      },
      include: { staffProfile: true }
    });
    return { success: true, user: JSON.parse(JSON.stringify(user)) };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating staff:", error);
    return { success: false, error: message };
  }
}

export async function getStaffWithPermissions(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        staffProfile: {
          include: {
            permissions: true
          }
        }
      }
    });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("Error fetching staff permissions:", error);
    return null;
  }
}

export async function updateStaffPermissions(staffProfileId: string, permissions: unknown) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const permsMap = permissions as Record<string, any>;
    const modules = Object.keys(permsMap);
    
    for (const mod of modules) {
      const perms = permsMap[mod];
      const upsertData = {
        canView: !!perms.view,
        canCreate: !!perms.create,
        canEdit: !!perms.edit,
        canDelete: !!perms.delete,
        canExport: !!perms.export
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (prisma.staffPermission as any).upsert({
        where: {
          staffProfileId_module: {
            staffProfileId,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            module: mod.toUpperCase() as any
          }
        },
        update: {
          ...upsertData
        },
        create: {
          staffProfileId,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          module: mod.toUpperCase() as any,
          ...upsertData
        }
      });
    }
    
    revalidatePath('/admin/staff');
    return { success: true };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error updating permissions:", error);
    return { success: false, error: message };
  }
}
