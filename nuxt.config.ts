import { removePagesMatching } from './utils/rounting-generate'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'pages:extend'(pages) {
      removePagesMatching(/_partials/, pages)
      removePagesMatching(/_composables/, pages)
    }
  },

  colorMode: {
    preference: 'light'
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },

  modules: ['nuxt-auth-utils', '@pinia/nuxt', '@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/storybook', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts', '@vueuse/nuxt', '@nuxt/image'],

  i18n: {
    locales: [
      { code: 'vi', name: 'Tiếng Viêt', iso: 'vi-VN', file: 'vi.json' },
      { code: 'en', name: 'English', iso: 'en-EN', file: 'en.json' }
    ],
    defaultLocale: 'vi',
    langDir: './locales'
  },

  googleFonts: {
    families: {
      'AR+One+Sans': true
    }
  },

  runtimeConfig: {
    oauth: {
      auth0: {
        clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_AUTH0_CLIENT_SECRET
      },
      github: {
        clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET
      }
    },
    session: {
      name: 'nuxt-session',
      password: process.env.NUXT_SESSION_PASSWORD
    }
  },

  devtools: {
    enabled: true
  }
})
