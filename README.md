# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Use this as a starter for a Railway app

This button below

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Flarryhudson%2Fremix-prisma-railway-starter&plugins=postgresql&referralCode=-msDiJ)

## Setting up Prisma

On your local machine:
- Make sure you're running postgres
- Create a new database on postgres (I like using [TablePlus](https://tableplus.com) on macOS)
- Copy .env.sample to .env
- Adjust the database URL in .env to use your computer username and password, and use the db name you created above.
- Add a model to prisma/schema.prisma
- Create a prisma migration
    - Run npx prisma migrate dev
- Commit your changes to the Git repo

You don't need to worry about setting up Postgres on Railway - if you enable the 'PostgreSQL' plugin, it will automatically set the `DATABASE_URL` environment variable that Prisma looks for.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
