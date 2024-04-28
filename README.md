# DAVINCIn

DAVINCIn Education App

Check out the demo app here: [`https://davincin.vercel.app`](https://davincin.vercel.app)

## Install dependencies

Once you pull the project, install dependencies with `pnpm install`

## Configure your local environment

Copy the .env.example file in this directory to .env and add details.

```bash
cp .env.example .env
```

## Start the application

Start a development server:

```bash
pnpm run dev
```

### Updating Prisma Schema

Whenever you update your Prisma schema, you will need to run the `pnpm db:push` command to create new indexes and regenerate Prisma Client.

## Building for Production

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
