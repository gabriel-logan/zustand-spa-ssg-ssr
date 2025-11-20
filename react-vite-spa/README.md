# React Vite SPA — Zustand Behavior

## Overview

This project demonstrates how Zustand behaves in a traditional **SPA (Single Page Application)** using **React + Vite**.

## Key Points

* The application never reloads during navigation.
* Zustand store remains alive in memory across all route changes.
* State resets only when the browser performs a full reload (F5), unless persistence middleware is added.

## Running

```bash
yarn install
yarn dev
```

## Building

```bash
yarn build
yarn preview
```

## Conclusion
* Zustand works seamlessly in a React Vite SPA.
