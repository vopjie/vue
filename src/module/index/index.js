require('../../common')
// vue
// import Vue from 'vue'
import App from './App'
// vue-router
// var VueRouter = require('vue-router')
Vue.use(VueRouter)
var router = new VueRouter()
router.map({
  '/': {
    name: 'index',
    component: require('../../views/index.vue')
  },
  '/swiper': {
    name: 'swiper',
    component: require('../../views/swiper.vue')
  },
  '/form': {
    name: 'form',
    component: require('../../views/form.vue')
  },
  '/person': {
    name: 'person',
    component: require('../../views/person.vue'),
    needLogin: true
  },
  '/page': {
    name: 'page',
    component: require('../../views/page.vue')
  },
  '/notice': {
    name: 'notice',
    component: require('../../views/notice.vue')
  },
  '/loading': {
    name: 'loading',
    component: require('../../views/loading.vue')
  },
  '/toast': {
    name: 'toast',
    component: require('../../views/toast.vue')
  },
  '/filter': {
    name: 'filter',
    component: require('../../views/filter.vue')
  },
  '/search': {
    name: 'search',
    component: require('../../views/search.vue')
  },
  '/touch': {
    name: 'touch',
    component: require('../../views/touch.vue')
  },
  '/dialog': {
    name: 'dialog',
    component: require('../../views/dialog.vue')
  }
})
router.beforeEach(function (transition) {
  if (transition.to.needLogin) {
    if (window.localStorage.userId) {
      transition.next()
    } else {
      let redirect = encodeURIComponent(transition.to.path)
      transition.redirect('/form?redirect=' + redirect)
    }
  } else {
    try {
      transition.next()
    } catch (e) {
      transition.abort()
      console.log('route caught', e)
    }
  }
})
router.afterEach(function (transition) {
  window.scrollTo(0, 0)
  document.title = transition.to.name
})
// router.redirect({
//   '*': '/news/1'
// })
router.start(App, '#app')
// vue-resource
var VueResource = require('vue-resource')
Vue.use(VueResource)
// vue-touch
var VueTouch = require('vue-touch')
VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.use(VueTouch)
