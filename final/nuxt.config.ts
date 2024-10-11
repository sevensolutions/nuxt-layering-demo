// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    "../layers/base-layer", // Direct reference
    //"base-layer", // Package reference (node_modules)
    "../layers/user-management-layer"
  ],
  devtools: { enabled: true },
})
