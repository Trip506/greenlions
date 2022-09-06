

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Green Lions Gardening",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Green Lions Gardening | We provide regular gardening services and grounds maintenance with excellent horticultural and trade knowledge. Serving West Penwith since 2003. We go above and beyond for your property!" },
      { name: 'format-detection', content: 'telephone=no' },

      //Facebook and twitter og (open graph) meta data (used also when sending links on whatsapp/insta)
      { hid: 'fb:app_id', name: 'fb:app_id', content: 'Green Lions Gardening ' },
      { hid: 'og:title', name: 'og:title', content: "Gardening Services in West Penwith " },
      { hid: 'og:image', name: 'og:image', content: "assets/images/iphone0-1349x1012-result.jpg" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Green Lions Gardening" },
      { hid: 'og:description', name: 'og:description', content: "Green Lions Gardening | We provide regular gardening services and grounds maintenance with excellent horticultural and trade knowledge. Serving West Penwith since 2003. We go above and beyond for your property!" }
    ],
    //Get favicon from assets folder
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ],

    //Global JS 
    script: [
      { src: "/web/assets/jquery/jquery.min.js", body: true, type: 'text/javascript', },
      { src: "/popper/popper.min.js", body: true, type: 'text/javascript', },
      { src: "/tether/tether.min.js", body: true, type: 'text/javascript', },
      { src: "/bootstrap/js/bootstrap.min.js", body: true, type: 'text/javascript', },
      { src: "/smoothscroll/smooth-scroll.js", body: true, type: 'text/javascript', },
      { src: "/dropdown/js/nav-dropdown.js", body: true, type: 'text/javascript', },
      { src: "/dropdown/js/navbar-dropdown.js", body: true, type: 'text/javascript', },
      { src: "/touchswipe/jquery.touch-swipe.min.js", body: true, type: 'text/javascript', },

    ],
  },

  //Global css
  css: [
    "assets/web/assets/mobirise-icons2/mobirise2.css",
    "assets/web/assets/mobirise-icons/mobirise-icons.css",
    "assets/tether/tether.min.css",
    "assets/bootstrap/css/bootstrap.min.css",
    "assets/bootstrap/css/bootstrap-grid.min.css",
    "assets/bootstrap/css/bootstrap-reboot.min.css",
    "assets/dropdown/css/style.css",
    "assets/formstyler/jquery.formstyler.css",
    "assets/socicon/css/styles.css",
    "assets/theme/css/style.css",
    "assets/mobirise/css/mbr-additional.css",
    "assets/fonts/reemi-kufi.css",
    "assets/fonts/muli.css",
  ],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/jsonld',

  ],

  // Auto import components
  components: true,

  // Modules for dev and build 
  buildModules: [

  ],

  //Don't build with unused CSS classes 
  build: {
    extractCSS: true,
  },

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  //SEO settings. Generates the XML sitemap 
  sitemap: {
    hostname: "https://greenlionsgardening.com",
    gzip: true,
    exclude: ["/secret", "/admin/**", "/edit"]
  },

  //SEO settings
  robots: {
    UserAgent: "*",
    Allow: "/",
    //Generate dynamic routes automatically based on sitemap of this address
    Sitemap: 'https://greenlionsgardening.com/sitemap.xml'
  },

  //FOR MOBILE FRONTEND TESTING

  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
}





