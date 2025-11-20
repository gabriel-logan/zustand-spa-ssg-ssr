# Next.js SSG — Zustand Behavior

## Overview

This project demonstrates Zustand behavior in **Next.js using Static Site Generation (SSG)**.

## Key Points

* Although SSG outputs static HTML files, once loaded, navigation via `<Link>` is fully client‑side.
* After hydration, the application behaves like a SPA.
* Zustand state persists across page transitions.
* State resets only on hard reloads.

## Running

```bash
yarn install
yarn dev
```

## Building

```bash
yarn build
yarn start
```

## Conclusion
* Zustand works seamlessly in a Next.js SSG application.
