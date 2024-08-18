# Material UI + Next.js App Router + Chonky example

This is a [Next.js](https://nextjs.org/) project bootstrapped using [`create-next-app`](https://github.com/vercel/next.js/tree/HEAD/packages/create-next-app) with Material UI installed.

This repo is a fork of https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs example.
It contains an attempt to use Chonky with mui v5.

## How to use

### Clone repo:


```bash
git clone https://github.com/Konard/mui-nextjs-chonky
cd mui-nextjs-chonky
```

### Install it and run:

```bash
yarn
yarn dev
```

### Open

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Chonky problem:

See https://github.com/Konard/mui-nextjs-chonky/blob/main/src/app/about/page.js

### With SSR (without 'use client'):

```
konard@MBP-Konstantin mui-nextjs-chonky % yarn build
yarn run v1.22.22
$ next build
  ▲ Next.js 14.2.5

   Creating an optimized production build ...
Failed to compile.

./node_modules/@aperturerobotics/chonky/dist/chonky.cjs.production.min.js
Module not found: ESM packages (react-dnd) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@aperturerobotics/chonky/dist/index.js
./src/app/about/page.js

./node_modules/@aperturerobotics/chonky/dist/chonky.cjs.production.min.js
Module not found: ESM packages (react-dnd-html5-backend) need to be imported. Use 'import' to reference the package instead. https://nextjs.org/docs/messages/import-esm-externals

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@aperturerobotics/chonky/dist/index.js
./src/app/about/page.js


> Build failed because of webpack errors
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

### Without SSR (with 'use client'):



```
konard@MBP-Konstantin mui-nextjs-chonky % yarn dev
yarn run v1.22.22
$ next dev
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1062ms
 ○ Compiling /about ...
 ✓ Compiled /about in 1846ms (2093 modules)
 ⨯ Internal error: TypeError: useMediaQuery is not a function
    at useIsMobileBreakpoint (./node_modules/@aperturerobotics/chonky/dist/chonky.cjs.development.js:2490:10)
    at eval (./node_modules/@aperturerobotics/chonky/dist/chonky.cjs.development.js:2852:28)
    at au (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:10446)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:44746)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:44769)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:44844)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at aj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
    at aC (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:52874)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50095)
    at aj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42336
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42822)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at aj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
    at aC (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:52874)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50095)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42922)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:44769)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at aj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42336
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42822)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at aj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:53793)
    at aC (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:52874)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:50095)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:42922)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:44769)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
    at aw (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16908)
    at a_ (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:49776)
    at ab (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:11808)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:35:16871
digest: "1634956573"
 GET /about 500 in 2063ms
```

```
konard@MBP-Konstantin mui-nextjs-chonky % yarn build
yarn run v1.22.22
$ next build
  ▲ Next.js 14.2.5

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
   Generating static pages (5/6)  [=   ]TypeError: y is not a function
    at tk (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/.next/server/app/about/page.js:1:43019)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/.next/server/app/about/page.js:1:48871
    at nj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46251)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60839)
    at nN (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60862)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60937)
    at nN (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538) {
  digest: '1812008652'
}

Error occurred prerendering page "/about". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: y is not a function
    at tk (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/.next/server/app/about/page.js:1:43019)
    at /Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/.next/server/app/about/page.js:1:48871
    at nj (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46251)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60839)
    at nN (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60862)
    at nM (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:60937)
    at nN (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (/Users/konard/Desktop/nextjs-mui/mui-nextjs-chonky/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
 ✓ Generating static pages (6/6)

> Export encountered errors on following paths:
        /about/page: /about
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
konard@MBP-Konstantin mui-nextjs-chonky % 
```

Where `y` is minified version of `useMediaQuery`.

## Learn more

To learn more about this example:

- [Next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Customizing Material UI](https://next.mui.com/material-ui/customization/how-to-customize/) - approaches to customizing Material UI.

## What's next?

You now have a working example project.
You can head back to the documentation and continue by browsing the [templates](https://next.mui.com/material-ui/getting-started/templates/) section.
