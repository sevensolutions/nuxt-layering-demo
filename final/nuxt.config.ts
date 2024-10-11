// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Sorting: Final is top, base is bottom
  extends: [
    "../layers/custom-user-management",
    "../layers/user-management",
    "../layers/base", // Direct reference
    //"base-layer", // Package reference (node_modules)

  ],
  devtools: { enabled: true },
})
