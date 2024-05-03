## Clone and run locally

1. Install pnpm

   ```bash
   npm install -g pnpm
   ```
   
2. Clone this repository

   ```bash
   gh clone TimBuilding/sd-solutions
   # or
   git clone git@github.com:TimBuilding/sd-solutions.git
   ```
   
3. Use `cd` to change into the app's directory

   ```bash
   cd sd-solutions
   ```
   
4. Install the dependencies

   ```bash
   pnpm install
   ```
   
5. Run supabase locally

   ```bash
   npx supabase start
   ```

6. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   pnpm run dev
   ```

   The server should now be running on [localhost:3000](http://localhost:3000/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

# Documentation

### Requirements

- Node.js >= 18.17.0
- pnpm 8

### Scripts

- `pnpm dev` — Starts the application in development mode at `http://localhost:3000`.
- `pnpm build` — Creates an optimized production build of your application.
- `pnpm start` — Starts the application in production mode.
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format-check` — Runs Prettier and checks if any files have formatting issues.
- `pnpm format` — Runs Prettier and formats files.
- `pnpm test` — Runs all the jest tests in the project.
- `pnpm test:ci` — Runs all the jest tests in the project, Jest will assume it is running in a CI environment.
- `pnpm analyze` — Builds the project and opens the bundle analyzer.

### Paths

TypeScript is pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/ui/Button'

// To import images or other files from the public folder
import avatar from '@/public/avatar.png'
```

### Git Workflow (Graphite)

1. Get the latest changes from the remote repository

   ```bash
   gt sync
   ```
   
2. Develop your feature or fix a bug

3. Save/commit your changes

   ```bash
   gt create -am "feat: add new feature"
   ```
> `-a` flag stages all changes and `-m` flag adds a commit message

4. Push your changes to the remote repository and create a pull request

   ```bash
   gt submit
   ```
   
5. Confirm the pull request on Graphite

6. Rinse and repeat