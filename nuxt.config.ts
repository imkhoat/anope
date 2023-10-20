import { NuxtPage } from "nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: true,
    hooks: {
        'pages:extend'(pages) {
            function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
                const pagesToRemove = []
                for (const page of pages) {
                    if (pattern.test(page.file)) {
                        pagesToRemove.push(page)
                    } else {
                        removePagesMatching(pattern, page.children)
                    }
                }
                for (const page of pagesToRemove) {
                    pages.splice(pages.indexOf(page), 1)
                }
            }
            removePagesMatching(/\_partials/, pages)
            removePagesMatching(/\_composables/, pages)
        }
    },
    colorMode: {
        preference: 'light'
    },
    vite: {
        vue: {
            script: {
                defineModel: true,
                propsDestructure: true,
            },
        },
    },
    modules: ['@pinia/nuxt', "@nuxt/ui", '@nuxtjs/i18n', "@nuxtjs/storybook", '@nuxt/image', '@pinia/nuxt', '@nuxtjs/google-fonts'],
    i18n: {
        locales: [
            { code: "vi", name: 'Tiếng Viêt', iso: "vi-VN", file: "vi.json" },
            { code: "en", name: 'English', iso: "en-EN", file: "en.json" }
        ],
        defaultLocale: "vi",
        langDir: './locales'
    },
    googleFonts: {
        families: {
            "AR+One+Sans": true
        }
    }
});
