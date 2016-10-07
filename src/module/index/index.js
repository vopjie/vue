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
    // component: require('../../views/swiper.vue')
    component:function(resolve){
      require.ensure(['../../views/swiper.vue'], function(){
        resolve(require('../../views/swiper.vue'));
      });
    }
  },
  '/form': {
    name: 'form',
    component:function(resolve){
      require.ensure(['../../views/form.vue'], function(){
        resolve(require('../../views/form.vue'));
      });
    }
  },
  '/person': {
    name: 'person',
    component:function(resolve){
      require.ensure(['../../views/person.vue'], function(){
        resolve(require('../../views/person.vue'));
      });
    },
    needLogin: true
  },
  '/page': {
    name: 'page',
    component:function(resolve){
      require.ensure(['../../views/page.vue'], function(){
        resolve(require('../../views/page.vue'));
      });
    }
  },
  '/notice': {
    name: 'notice',
    component:function(resolve){
      require.ensure(['../../views/notice.vue'], function(){
        resolve(require('../../views/notice.vue'));
      });
    }
  },
  '/loading': {
    name: 'loading',
    component:function(resolve){
      require.ensure(['../../views/loading.vue'], function(){
        resolve(require('../../views/loading.vue'));
      });
    }
  },
  '/toast': {
    name: 'toast',
    component:function(resolve){
      require.ensure(['../../views/toast.vue'], function(){
        resolve(require('../../views/toast.vue'));
      });
    }
  },
  '/filter': {
    name: 'filter',
    component:function(resolve){
      require.ensure(['../../views/filter.vue'], function(){
        resolve(require('../../views/filter.vue'));
      });
    }
  },
  '/search': {
    name: 'search',
    component:function(resolve){
      require.ensure(['../../views/search.vue'], function(){
        resolve(require('../../views/search.vue'));
      });
    }
  },
  '/touch': {
    name: 'touch',
    component:function(resolve){
      require.ensure(['../../views/touch.vue'], function(){
        resolve(require('../../views/touch.vue'));
      });
    }
  },
  '/dialog': {
    name: 'dialog',
    component:function(resolve){
      require.ensure(['../../views/dialog.vue'], function(){
        resolve(require('../../views/dialog.vue'));
      });
    }
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
// vue-touch
var VueTouch = require('vue-touch')
VueTouch.config.swipe = {
  direction: 'horizontal'
}
Vue.use(VueTouch)
