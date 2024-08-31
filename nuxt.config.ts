// nuxt.config.js
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering (only client-side)
  devtools: { enabled: true }, // Enable devtools
  modules: ["@nuxt/ui"], // Include necessary modules
  compatibilityDate: "2024-08-31", // Compatibility setting

  nitro: {
    preset: 'static', // Use Nitro preset for static generation
  },
});