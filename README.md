# zustand-spa-ssg-ssr

Demonstration repository created to test and compare how Zustand behaves across multiple application architectures: **SPA**, **SSG**, and **SSR**.

## Projects
1. [Next.js SPA — Zustand Behavior](./nextjs-spa)
2. [Next.js SSG — Zustand Behavior](./nextjs-ssg)
3. [Next.js SSR — Zustand Behavior](./nextjs-ssr)

## Conclusions

* Zustand works consistently across **SPA**, **SSG**, and **SSR**.
* It preserves client-side state between navigations because **Next.js SSG and SSR become SPA after the first page load**.
* State is only reset on full reloads unless persistence middleware is used.
* No special configuration is needed for Zustand to work in any of these architectures.
* It mantains the state between pages in all architectures above.
