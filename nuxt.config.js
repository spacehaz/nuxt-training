export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [
      {
        innerHTML: `<div><img src="https://mc.yandex.ru/watch/56164720" style="position:absolute; left:-9999px;" alt="" /></div>`,
      },
    ],
    script: [
      {
        hid: 'gtm-script1',
        innerHTML: `
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           ym(56164720, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
           });
        `,
        type: 'text/javascript',
        charset: 'utf-8',
        defer: true,
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { lang: 'css', src: '~/assets/fonts/fonts.css' },
    '~assets/styles/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/route.js' }, { src: '~/plugins/swiper.js' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/gtm',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  gtm: {
    id: 'GTM-M3T8296',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    API_URL: 'https://strapi.kruzhok.io',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  router: {
    middleware: 'sharedData',
  },
};
