

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
      { hid: 'description', name: 'description', content: "Gardening services penzance mowing strimming improvement maintenance landscaping design allotment care" },
      { name: 'format-detection', content: 'telephone=no' },

      //Facebook og (open graph) meta data 
      { hid: 'fb:app_id', name: 'fb:app_id', content: 'Green Lions Gardening ' },
      { hid: 'og:title', name: 'og:title', content: "Gardening Services in West Penwith " },
      { hid: 'og:image', name: 'og:image', content: "assets/images/iphone0-1349x1012-result.jpg" },
      { hid: 'twitter:title', name: 'twitter:title', content: "Green Lions Gardening" },
      { hid: 'og:description', name: 'og:description', content: "Gardening services penzance mowing strimming improvement maintenance landscaping design allotment care" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Reem+Kufi:400,500,600,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i&display=swap'
      }
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

      { src: "/mobirise-shop/script.js", body: true, type: 'text/javascript', },
      // { src: "/formstyler/jquery.formstyler.js", body: true, type: 'text/javascript', },
      // { src: "/formstyler/jquery.formstyler.min.js", body: true, type: 'text/javascript', },
      { src: "/datepicker/jquery.datetimepicker.full.js", body: true, type: 'text/javascript', },


      // { src: "/gallery/script.js", body: true, type: 'text/javascript', },
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
    "assets/mobirise/css/mbr-additional.css",
    // "assets/styles.pure.css",

  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/jsonld',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@/modules/sitemapRouteGenerator',
  ],

  build: {
    // standalone: true,
    extractCSS: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    // With options

  ],

  //SEO settings
  sitemap: {
    hostname: "https://greenlionsgardening.netlify.app/",
    gzip: true,
    exclude: ["/secret", "/admin/**", "/edit"]
  },

  //SEO settings
  robots: {
    UserAgent: "*",
    Allow: "/",
    // Disallow: "/",
    Sitemap: 'https://greenlionsgardening.netlify.app/'
  },

  //FOR MOBILE FRONTEND TESTING

  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },




}





