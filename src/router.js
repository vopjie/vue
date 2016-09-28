module.exports = function (router) {
  router.map({
    '/slide': {
      name: 'slide',
      component: require('./views/slide.vue')
    },
    '/form': {
      name: 'form',
      component: require('./views/form.vue')
    }
  })
}
