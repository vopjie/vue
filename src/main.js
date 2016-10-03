// font rem
var windowWidth = window.screen.availWidth
var html = document.getElementsByTagName('html')[0]
var max = 41.4
var size = windowWidth / 10 <= max ? windowWidth / 10 : max
html.style.fontSize = size + 'px'
// weui.min.css
require('../node_modules/weui/dist/style/weui.min.css')
// vue
import Vue from 'vue'
import App from './App'
// filter
Vue.filter('percentageFormat', require('./filters/percentageFormatter'))
Vue.filter('byteFormat', require('./filters/byteFormatter'))
Vue.filter('timestampFormat', require('./filters/timestampFormatter'))
// vue-resource
const VueResource = require('vue-resource')
Vue.use(VueResource)
// vue-router
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
require('./router')(router)
router.start(App, '#app')
