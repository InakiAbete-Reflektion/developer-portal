# ![Sitecore logo in red background](https://github.com/Sitecore/developer-portal/raw/main/apps/devportal/public/favicon.png) Sitecore Developer Portal

Welcome to the Sitecore Developer Portal repository. This app was created to help you get started with Sitecore. The developer portal aims to bring all the Sitecore developer tools together in one place.

## Technology used

The Sitecore developer portal is built with Next.js, Typescript, Tailwind CSS, managed using Turborepo and is hosted on Vercel. The app uses static site generation to create all the pages at build time. It also utilizes Incremental Static Regeneration (ISR) to automatically update the app when changes to page content are made. Much of the page content is written in Markdown and is converted to HTML at build time. Images that are used are managed in Sitecore DAM and are published to a CDN.

### Apps and Packages

- apps
  - `devportal`: Developer Portal public site ()[Next.js](https://nextjs.org/) based)
  - `web`: Blank [Next.js](https://nextjs.org/) app
- packages
  - `ui`: a React component library shared by both `web` and `devportal` applications
  - `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Prerequisites

#### Monorepo

This repository is utilizing Turborepo to manage our monorepo setup. More information about Monorepos can be found in the [Monorepo Handbook](https://turbo.build/repo/docs/handbook).

#### Node.js

The developer portal is built with Next.js, so you'll need to have Node.js installed to build the project. You can find the latest version of Node.js [here](https://nodejs.org/en/). We recommend using the LTS version of Node.js.

#### Environment Variables

The Sitecore developer portal incorporates a number of third party services to bring in content. For full functionality, you must create a **.env.local** file in the root of the project and add in the below environment variables.

The following variables should exist within the .env.local file:

```
NEXT_PUBLIC_PUBLIC_URL=
NEXT_PUBLIC_YOUTUBE_API_KEY="An API key with YouTube Data API v3 access enabled"
NEXT_PUBLIC_TWITTER_BEARER_TOKEN="A bearer token from Twitter"
NEXT_PUBLIC_COOKIE_CONSENT_URL=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GTM_AUTH=
NEXT_PUBLIC_GTM_ENVIRONMENT=
```

_Note: The site will still function without the above keys. The components that require these environment variables will fail gracefully and not display on the pages._

To enable search the following environment variables are required:

```
NEXT_PUBLIC_COVEO_ACCESS_TOKEN=
NEXT_PUBLIC_COVEO_ORGANIZATION_ID=
NEXT_PUBLIC_COVEO_PIPELINE=
NEXT_PUBLIC_COVEO_SEARCH_HUB=
```

_Note: The site will still function if the keys are missing or left blank. However these keys are still required to build the application_

## Getting Started

1. Install [Node.js](htts://nodejs.org/en/), we recommend the LTS version.
2. Clone the repository.
3. Inside the repository run `npm install` to install all the dependencies.
4. Create a `.env.local` file in the root of the project and add the following environment variables:

```
NEXT_PUBLIC_YOUTUBE_API_KEY=""
NEXT_PUBLIC_TWITTER_BEARER_TOKEN=""
NEXT_PUBLIC_COOKIE_CONSENT_URL=

NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GTM_AUTH=
NEXT_PUBLIC_GTM_ENVIRONMENT=

NEXT_PUBLIC_COVEO_ACCESS_TOKEN=
NEXT_PUBLIC_COVEO_ORGANIZATION_ID=
NEXT_PUBLIC_COVEO_PIPELINE=
NEXT_PUBLIC_COVEO_SEARCH_HUB=
```

(For more information on populating environment variables see section **Environment Variables** above.)

5.  Run `npm run dev` to start the development server.
6.  Open the **http://localhost:3000** in your browser to see the result!

## Contributions

We are very grateful to the community for contributing bug fixes and improvements. We welcome all efforts to evolve and improve the Sitecore Developer Portal; read below to learn how to participate in those efforts.

### [Code of Conduct](https://github.com/Sitecore/developer-portal/CODE_OF_CONDUCT.md)

Sitecore has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://github.com/Sitecore/developer-portal/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Contributing Guide

If you want to make changes to the code, follow these steps:

1. Fork the Developer Portal Repo GitHub repo.
2. Clone the forked repo to your local machine.
3. Create a feature branch from `main` for your changes. e.g. `git checkout -b my-feature-branch`
4. `npm install`
5. `npm run dev` (to preview your changes locally)
6. Make your changes (_if you changes include images please use the `public/images` folder to store the image(s)_)
7. Commit, push to your remote fork of the Developer Portal repo, then open a pull request (PR) to the `main` branch of the Developer Portal repo.

Your changes will be reviewed and merged if appropriate.
