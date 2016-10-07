// font rem
var windowWidth = window.screen.availWidth
var html = document.getElementsByTagName('html')[0]
var max = 41.4
var size = windowWidth / 10 <= max ? windowWidth / 10 : max
html.style.fontSize = size + 'px'
// import 'weui/dist/style/weui.css';
// vue
// import Vue from 'vue'
Vue.config.debug = true
// filter
Vue.filter('percentageFormat', require('./filters/percentageFormatter'))
Vue.filter('byteFormat', require('./filters/byteFormatter'))
Vue.filter('timestampFormat', require('./filters/timestampFormatter'))
