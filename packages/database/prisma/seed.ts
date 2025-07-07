import { PrismaClient } from '../lib/generated/prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123', // In a real app, this would be hashed
      role: 'admin',
      image: 'https://ui-avatars.com/api/?name=Admin+User'
    },
  });

  console.log({ admin });

  // Create some tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { name: 'Next.js' },
      update: {},
      create: { name: 'Next.js' },
    }),
    prisma.tag.upsert({
      where: { name: 'React' },
      update: {},
      create: { name: 'React' },
    }),
    prisma.tag.upsert({
      where: { name: 'TypeScript' },
      update: {},
      create: { name: 'TypeScript' },
    }),
  ]);

  console.log({ tags });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
