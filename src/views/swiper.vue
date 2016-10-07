<template>
  <section>
    <swiper :options.sync="options"></swiper>
  </section>
</template>
<script>
import Swiper from '../components/Swiper'
module.exports = {
  components: {Swiper},
  data: function () {
    return {
      options: {
        id: 'banner',
        images: [
          {
            src: 'static/images/3.jpg',
            alt: '',
            href: ''
          },
          {
            src: 'static/images/2.jpg',
            alt: '',
            href: ''
          },
          {
            src: 'static/images/1.jpg',
            alt: '首页',
            href: './?#!/index'
          }
        ],
        fullScreen: true,
        width: window.innerWidth,
        height: window.innerHeight,
        pagination: 'banner-pagination',
        direction: 'vertical',
        loop: false,
        effect: 'coverflow',
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  section {height: 100vh;}
  .swiper-container {width: 100%;height: 100%;}
</style>
