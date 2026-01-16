export default defineNuxtConfig({
  css: ['~/assets/site.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Design Convergence',
      meta: [
        { name: 'description', content: 'An assortment of well-designed products.' },
      ],
      link: [{ rel: 'icon', href: '/favicon.webp', type: 'image/webp' }],
    },
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
    },
  },
});
