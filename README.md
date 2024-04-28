# davincin

davincin education app

## Setting up

Once you pull the project, install dependencies with `pnpm install`

Create `.env` file and configure environment variables as in `.env.example`

Whenever you update your Prisma schema, you will need to run the `pnpm dlx prisma db push` command to create new indexes and regenerate Prisma Client.

## Developing

start a development server:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.