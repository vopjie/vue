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
            src: 'http://cdn.shenmatouzi.com/wx/images/safe/1.png',
            alt: '',
            href: ''
          },
          {
            src: 'http://cdn.shenmatouzi.com/wx/images/safe/2.png',
            alt: '',
            href: ''
          },
          {
            src: 'http://cdn.shenmatouzi.com/wx/images/safe/3.png',
            alt: '首页',
            href: '/?#!/index'
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
  .swiper-container {width: 100%;height: 100%;}
</style>
