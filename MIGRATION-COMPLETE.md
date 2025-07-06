# Migration to Monorepo Complete

The migration of both the admin and website projects to the monorepo structure has been completed. The monorepo now includes the following structure:

```
esmaeilabedi-monorepo/
├── apps/
│   ├── admin/     # Admin panel application
│   └── website/   # Public website application
├── packages/
│   ├── database/  # Shared database client and Prisma schema
│   ├── types/     # Shared TypeScript types
│   └── ui/        # Shared UI components
├── package.json   # Root package.json with workspaces configuration
└── turbo.json     # Turborepo configuration
```

## What's Been Done

1. Created monorepo structure with Yarn workspaces
2. Set up Turborepo for build orchestration
3. Migrated both admin and website projects into the monorepo
4. Created shared packages for UI, types, and database
5. Updated imports to use the shared packages
6. Configured TypeScript for the monorepo
7. Added build scripts for all packages and apps

## Running the Monorepo

### Installation

```bash
# Install dependencies for all workspaces
yarn install
```

### Development

To run both applications in development mode:

```bash
# Run everything in development mode
yarn dev

# Or run specific applications
yarn dev:website
yarn dev:admin
```

### Building

To build all applications:

```bash
# Build everything
yarn build

# Or build specific applications
yarn build:website
yarn build:admin
```

### Database Operations

```bash
# Generate Prisma client
yarn db:generate

# Push schema to database
yarn db:push

# Seed the database
yarn db:seed
```

## Next Steps

1. Ensure all functionality works as expected
2. Add more shared components to the UI package
3. Refine shared types
4. Set up CI/CD pipeline for the monorepo
5. Deploy to Vercel

## Notes

- The admin panel runs on port 3001
- The website runs on port 3000
- Both applications share the same database
