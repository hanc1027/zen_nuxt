const pkg = require('./package')


module.exports = {
  mode: 'universal',
  env:{
    fbAPIKey:"AIzaSyAOzccuLBhNT5d3YJZ0NckZ7iAUswIY07Q"
  },
  /*
  ** Headers of the page
  */
  head: {
    title:"中區禪悅社後台管理",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "中區禪悅社後台管理"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/mainicon.ico' },
      { rel: 'stylesheet', href: "css/bootstrap-cerulean.min.css" },
      { rel: 'stylesheet', href: "css/charisma-app.css" },
      { rel: 'stylesheet', href: 'bower_components/fullcalendar/dist/fullcalendar.css' },
      { rel: 'stylesheet', href: 'bower_components/fullcalendar/dist/fullcalendar.print.css' },
      { rel: 'stylesheet', href: 'bower_components/chosen/chosen.min.css' },
      { rel: 'stylesheet', href: 'bower_components/colorbox/example3/colorbox.css' },
      { rel: 'stylesheet', href: 'bower_components/responsive-tables/responsive-tables.css' },
      { rel: 'stylesheet', href: 'bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css' },
      { rel: 'stylesheet', href: 'css/jquery.noty.css' },
      { rel: 'stylesheet', href: 'css/noty_theme_default.css' },
      { rel: 'stylesheet', href: 'css/elfinder.min.css' },
      { rel: 'stylesheet', href: 'css/elfinder.theme.css' },
      { rel: 'stylesheet', href: 'css/jquery.iphone.toggle.css' },
      { rel: 'stylesheet', href: 'css/uploadify.css' },
      { rel: 'stylesheet', href: 'css/animate.min.css' }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.js" },
      { src: "bower_components/bootstrap/dist/js/bootstrap.min.js" },
      { src: "js/jquery.cookie.js" },
      { src: 'bower_components/moment/min/moment.min.js' },
      { src: 'bower_components/fullcalendar/dist/fullcalendar.min.js' },
      { src: 'js/jquery.dataTables.min.js' },
      { src: "bower_components/chosen/chosen.jquery.min.js" },
      { src: "bower_components/colorbox/jquery.colorbox-min.js" },
      { src: "js/jquery.noty.js" },
      { src: "bower_components/responsive-tables/responsive-tables.js" },
      { src: "bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js" },
      { src: "js/jquery.raty.min.js" },
      { src: "js/jquery.iphone.toggle.js" },
      { src: "js/jquery.autogrow-textarea.js" },
      { src: "js/jquery.uploadify-3.1.min.js" },
      { src: "js/jquery.history.js" },
      { src: "js/charisma.js" },
      //connect firebase
      { src: "https://www.gstatic.com/firebasejs/5.7.3/firebase.js"},
      { src: "js/init_firebase.js"},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    vendor: ['external_library'] //讓alert可以使用，因為nuxt是server-side rendering，但alert是瀏覽器的api
  }
}
