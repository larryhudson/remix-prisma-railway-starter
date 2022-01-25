# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Use this as a starter for a Railway app

This button below will create a new app on [Railway](https://railway.app) with PostgreSQL pre-configured, ready for you to add models to Prisma and get going.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Flarryhudson%2Fremix-prisma-railway-starter&plugins=postgresql&referralCode=-msDiJ)

## Getting started with Remix, Railway and Prisma

1. Click the 'Deploy on Railway' button above. This will create a new Railway app, and also create a new repo in your GitHub account that uses this repo as a template.
2. Clone your newly created repo onto your local machine
3. On your local machine, create a new postgres database
    1. On Mac, you can install Postgres with homebrew by running `brew install postgres` and then run `brew services start postgresql` to start it
    2. You can use [TablePlus](https://tableplus.com) to create a new database
4. In the repo folder, copy .env.sample to .env
5. In .env, adjust the database URL to use your computer username and password, and the name of the database you created in step 2 above.
6. Add models to `prisma/schema.prisma`.
7. Run `npm migrate:dev` to create a prisma migration
8. Commit your changes to the new repo and push. When you push, Railway will create a new deployment.

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
