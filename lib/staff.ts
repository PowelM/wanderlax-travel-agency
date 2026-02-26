import { prisma } from "@/lib/prisma";

export async function getStaffData() {
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
                   ['ADMIN', 'SUPER_ADMIN', 'CONSULTANT'].includes(user.role);
    const isTarget = user.email.toLowerCase().trim() === targetEmail;
    return isStaff || isTarget;
  });

  return JSON.parse(JSON.stringify(staff));
}
