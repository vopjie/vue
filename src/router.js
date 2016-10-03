module.exports = function (router) {
  router.map({
    '/index': {
      name: 'index',
      component: require('./App.vue')
    },
    '/swiper': {
      name: 'swiper',
      component: require('./views/swiper.vue')
    },
    '/form': {
      name: 'form',
      component: require('./views/form.vue')
    },
    '/person': {
      name: 'person',
      component: require('./views/person.vue'),
      needLogin: true
    },
    '/page': {
      name: 'page',
      component: require('./views/page.vue')
    },
    '/notice': {
      name: 'notice',
      component: require('./views/notice.vue')
    },
    '/loading': {
      name: 'loading',
      component: require('./views/loading.vue')
    },
    '/toast': {
      name: 'toast',
      component: require('./views/toast.vue')
    },
    '/charts': {
      name: 'charts',
      component: require('./views/charts.vue')
    },
    '/filter': {
      name: 'filter',
      component: require('./views/filter.vue')
    },
    '/search': {
      name: 'search',
      component: require('./views/search.vue')
    },
    '/dialog': {
      name: 'dialog',
      component: require('./views/dialog.vue')
    }
  })
  router.beforeEach(function (transition) {
    if (transition.to.needLogin) {
      if (window.localStorage.userId) {
        transition.next()
      } else {
        var redirect = encodeURIComponent(transition.to.path)
        transition.redirect('/form?redirect=' + redirect)
      }
    } else {
      transition.next()
    }
  })

  router.afterEach(function (transition) {

  })
}
