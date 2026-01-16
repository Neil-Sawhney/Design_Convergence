export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Simple Static Store',
      meta: [
        { name: 'description', content: 'A minimal, fully static store with Stripe Payment Links.' },
      ],
      link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    },
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
    },
  },
});
