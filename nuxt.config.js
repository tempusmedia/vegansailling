import i18n from './locales/i18n'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'vegansailing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,300&display=swap" }
    ],


  },
  // { path: '/api', handler: '~api/index.js' },  
  serverMiddleware: ["~/api/index.js"],
  server: {


    port: 3000,
    host: '0.0.0.0',
  },

  env: {
    baseUrl: process.env.BASE_URL
  },



  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.css',
    'aos/dist/aos.css'

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: 'plugins/owl.js', ssr: false },// Only works on client side
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: '~/plugins/vue-number-input', ssr: false },
    { src: '~/plugins/vue-carousel-3d', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue-video-background', ssr: false },
    { src: '~/plugins/vue-gtag', ssr: false },
    { src: '~/plugins/vue-easy-lightbox', ssr: false }



  ],
  purgeCSS: {
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // "nuxt-compress"

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-cookie-control', {
      controlButton: false,
      colors: {

        modalOverlay: '#000',
        modalTextColor: '#154752',
        modalBackground: 'rgba(255,255,255)',
        modalOverlayOpacity: 0.8,
        modalButtonColor: '#154752',
        modalUnsavedColor: '#fff',
        modalButtonHoverColor: '#154752',
        modalButtonBackground: '#fff',
        modalButtonHoverBackground: '#ffffff4d',




      }

    }],



    [
      'nuxt-i18n',
      {
        locales: ['en', 'hr'],
        defaultLocale: 'en',
        vueI18n: i18n
      }
    ],

    'nuxt-i18n-link'
  ],
  // gtm: {
  //   id: 'GTM-MHGR4PQ',
  // },
  cookies: {
    necessary: [
      {
        //if multilanguage
        name: {
          en: 'Default Cookies'
        },
        //else
        name: 'Default Cookies',
        //if multilanguage
        description: {
          en: 'Used for cookie control.'
        },
        //else
        description: 'Used for cookie control.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],



    //   optional: [
    //     {
    //       name: 'Google Analitycs',
    //       //if you don't set identifier, slugified name will be used
    //       identifier: 'vegan',
    //       //if multilanguage
    //       description: {
    //         en: 'Google GTM is ...'
    //       },
    //       //else
    //       description: 'Google GTM is...',

    //       initialState: true,
    //       src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
    //       async: true,
    //       cookies: ['_ga', '_gat', '_gid'],
    //       accepted: () => {
    //         window.dataLayer = window.dataLayer || [];
    //         window.dataLayer.push({
    //           'gtm.start': new Date().getTime(),
    //           event: 'gtm.js'
    //         });
    //       },
    //       declined: () => {
    //       }
    //     }
    //   ]
  },





  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxyHeaders: false,
    credentials: false
    // baseURL: process.env.BASE_URL || 'http://localhost:3000', // Used as fallback if no runtime config is provided

  },
  // proxy: {
  //   '/api/': { target: 'https://api.example.com/', pathRewrite: { '^/api/': '' }, changeOrigin: true }
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {

      },
    },
    // transpile: ['vue-carousel-3d']
  },



}
