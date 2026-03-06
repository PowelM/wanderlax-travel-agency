import { prisma } from './lib/prisma.ts';

async function main() {
  console.log('Prisma Models Available:');
  const keys = Object.keys(prisma);
  // Filter out internal prisma keys (usually start with $ or are capitalize)
  const models = keys.filter(key => !key.startsWith('$') && key !== 'constructor');
  console.log(models.sort());
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
