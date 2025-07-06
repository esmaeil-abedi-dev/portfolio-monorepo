import { PrismaClient } from '../generated/prisma';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    // For Vercel deployment, we want to use connection pooling
    // This helps with serverless functions that connect to the database
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

export const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
