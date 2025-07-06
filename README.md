# Esmaeil Abedi's Website Monorepo

This is the monorepo for Esmaeil Abedi's personal website and admin panel.

## Structure

- `apps/website`: The public website (esmaeilabedi.dev)
- `apps/admin`: The admin panel (admin.esmaeilabedi.dev)
- `packages/ui`: Shared UI components
- `packages/database`: Prisma schema and database client
- `packages/types`: Shared TypeScript types

## Getting Started

Install dependencies:

```bash
yarn install
```

Set up environment variables:

```bash
cp apps/admin/.env.example apps/admin/.env
cp apps/website/.env.example apps/website/.env
cp packages/database/.env.example packages/database/.env
```

Generate Prisma client:

```bash
yarn db:generate
```

Run development servers:

```bash
# Run website (localhost:3000)
yarn dev:website

# Run admin panel (localhost:3001)
yarn dev:admin

# Run both
yarn dev
```

## Deployment

Build all applications:

```bash
yarn build
```

Or build individual apps:

```bash
yarn build:website
yarn build:admin
```

## Database

Generate Prisma client:

```bash
yarn db:generate
```

Push schema changes to the database:

```bash
yarn db:push
```

Seed database with initial data:

```bash
yarn db:seed
```
