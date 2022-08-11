import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    ssr: true,
    head: {
        htmlAttrs: {
            lang: 'la'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        bodyAttrs: {
            class: 'test'
        }
    },
    modules: ['@intlify/nuxt3'],
    buildModules: [
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
    ],
    css: [
        "~/assets/css/tailwind.css",
    ],
    alias: {
        '~/*': './*',
        yup: 'yup/lib/index.js'
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: ['vee-validate', '@vee-validate/rules', 'moment'],
    },
    intlify: {
        localeDir: 'locales',
        vueI18n: {
            fallbackLocale: ['lo', 'en'],
            locale: 'lo',
        }
    }
})
