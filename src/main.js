var windowWidth = window.screen.availWidth
var html = document.getElementsByTagName('html')[0]
var max = 41.4
var size = windowWidth / 10 <= max ? windowWidth / 10 : max
html.style.fontSize = size + 'px'

require('../node_modules/weui/dist/style/weui.min.css')

import Vue from 'vue'
import App from './App'
var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
require('./router')(router)
router.start(App, '#app')
