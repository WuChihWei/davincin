# DAVINCIn

DAVINCIn Education App

Check out the demo app here: [`https://davincin.vercel.app`](https://davincin.vercel.app)

## Installation

Once you pull the project, install dependencies with `pnpm install` and run `pnpm postinstall` to generate Prisma Client

Create `.env` file and configure environment variables as in `.env.example`


## Developing

start a development server:

```bash
pnpm run dev
```

### Updating Prisma schema
Whenever you update your Prisma schema, you will need to run the `pnpm db:push` command to create new indexes and regenerate Prisma Client.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
