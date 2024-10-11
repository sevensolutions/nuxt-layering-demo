# Nuxt Layering Demo

## Getting started

Install dependencies and then run using the dev script.

```
npm install

npm run dev
```

## Whats going on

`layers/base` is the bottom layer. It contains basic components like the `AppShell` or `FormHeader`.
It also contains two example pages.

`layers/user-management` contains a self-contained sub application for user management including it's own components.

`layers/custom-user-management` is a customization of the `user-management` layer. It simply overwrites the `contacts/[id].vue` page.

`final` is the final Nuxt application which will be executed.

## Useful Resources

https://nuxt.com/docs/guide/going-further/layers

To pack the base layer
```
npm pack
```

Layers can be installed from a package directly
```
npm install ..\layers\base\base-layer-0.0.1.tgz
```
