// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    vite: {
        vue: {
            script: {
                defineModel: true,
                propsDestructure: true,
            },
        },
    },
    modules: ['@pinia/nuxt', "@nuxt/ui", '@nuxtjs/i18n', "@nuxtjs/storybook"],
    i18n: {
        locales: [
            { code: "vi", name: 'Tiếng Viêt', iso: "vi-VN", file: "vi.json" },
            { code: "en", name: 'English', iso: "en-EN", file: "en.json" }
        ],
        defaultLocale: "vi",
        langDir: './locales'
    }
});
