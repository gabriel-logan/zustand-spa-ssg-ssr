# Next.js SSR — Zustand Behavior

## Overview

This project demonstrates Zustand behavior using **Next.js Server‑Side Rendering (SSR)**.

## Key Points

* SSR generates HTML on each request, but once hydrated, the app becomes a SPA.
* Zustand maintains state across all client‑side navigations.
* Full reloads reset the store unless persistence is used.
* SSR setups should ensure no server‑side state leakage by creating fresh stores per request.

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
* Zustand works seamlessly in a Next.js SSR application.
