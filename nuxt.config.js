import i18n from './locales/i18n'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
    ]

  },


  server: {


    port: 3000,
    host: 'localhost'
    // host: '0.0.0.0',
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
    { src: '~/plugins/vue-easy-lightbox', ssr: false },



  ],
  purgeCSS: {
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      'nuxt-i18n',
      {
        locales: ['en', 'hr'],
        defaultLocale: 'en',
        vueI18n: i18n
      }
    ],
    ['nuxt-mail', {
      smtp: {
        host: "mail.tempusmedia.hr",
        port: 465,
        secure: true,
      },
      auth: {
        user: "vegan@tempusmedia.hr",
        pass: "EdQj4RkA4fB6"
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    },
    ],
    'nuxt-i18n-link'
  ],


  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {

      },
    },
    // transpile: ['vue-carousel-3d']
  }

}
