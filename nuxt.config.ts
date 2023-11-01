import { removePagesMatching } from './utils/routingGenerate'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enable: true
    },
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
    modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/storybook', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
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
    }
})
