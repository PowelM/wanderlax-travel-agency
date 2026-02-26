import { PrismaClient } from "@prisma/client";
import "dotenv/config";

async function main() {
  const prisma = new PrismaClient();

  console.log("🌍 Database User Audit...");

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        firstName: true,
        lastName: true,
        staffProfile: true
      }
    });

    console.log("TOTAL USERS:", users.length);
    users.forEach(u => {
      console.log(`- ${u.email} [${u.role}] StaffProfile: ${u.staffProfile ? 'YES' : 'NO'}`);
    });

  } catch (error) {
    console.error("DEBUG ERROR:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
