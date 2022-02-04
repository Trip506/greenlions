export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'greenlions',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],


    script: [
      { src: "/web/assets/jquery/jquery.min.js", body: true, type: 'text/javascript', },
      { src: "/popper/popper.min.js", body: true, type: 'text/javascript', },
      { src: "/tether/tether.min.js", body: true, type: 'text/javascript', },
      { src: "/bootstrap/js/bootstrap.min.js", body: true, type: 'text/javascript', },
      { src: "/smoothscroll/smooth-scroll.js", body: true, type: 'text/javascript', },
      { src: "/dropdown/js/nav-dropdown.js", body: true, type: 'text/javascript', },
      { src: "/dropdown/js/navbar-dropdown.js", body: true, type: 'text/javascript', },
      { src: "/touchswipe/jquery.touch-swipe.min.js", body: true, type: 'text/javascript', },
      { src: "/parallax/jarallax.min.js", body: true, type: 'text/javascript', },
      { src: "/mobirise-shop/script.js", body: true, type: 'text/javascript', },
      { src: "/formstyler/jquery.formstyler.js", body: true, type: 'text/javascript', },
      { src: "/formstyler/jquery.formstyler.min.js", body: true, type: 'text/javascript', },
      { src: "/datepicker/jquery.datetimepicker.full.js", body: true, type: 'text/javascript', },
      { src: "/theme/js/script.js", body: true, type: 'text/javascript', },
      { src: "/gallery/player.min.js", body: true, type: 'text/javascript', },
      { src: "/gallery/script.js", body: true, type: 'text/javascript', },
      { src: "/formoid/formoid.min.js", body: true, type: 'text/javascript', },
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "assets/web/assets/mobirise-icons2/mobirise2.css",
    "assets/web/assets/mobirise-icons/mobirise-icons.css",
    "assets/tether/tether.min.css",
    "assets/bootstrap/css/bootstrap.min.css",
    "assets/bootstrap/css/bootstrap-grid.min.css",
    "assets/bootstrap/css/bootstrap-reboot.min.css",
    "assets/dropdown/css/style.css",
    "assets/formstyler/jquery.formstyler.css",
    "assets/formstyler/jquery.formstyler.theme.css",
    "assets/datepicker/jquery.datetimepicker.min.css",
    "assets/socicon/css/styles.css",
    "assets/theme/css/style.css",
    // "assets/gallery/style.css",
    "assets/mobirise/css/mbr-additional.css",
    "assets/styles.pure.css",
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/strapi'],

  strapi: {
    entities: ['posts'],
    url: 'http://localhost:1337'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
