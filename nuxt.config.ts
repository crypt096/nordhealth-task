// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: "Nordhealth Task"
    }
  }
})
