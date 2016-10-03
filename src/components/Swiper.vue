<template>
  <div class="swiper-container" id="{{options.id}}">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in options.images">
        <a href="{{image.href||'javascript:void(0);'}}" v-bind:style="{backgroundImage:'url(' + image.src + ')'}">
          <img v-if="!options.fullScreen" v-bind:src="image.src" alt="{{image.alt}}" />
        </a>
      </div>
    </div>
    <div v-if="options.pagination" class="swiper-pagination" v-bind:class="options.pagination"></div>
  </div>
</template>

<script>
var Swiper = require('swiper')
export default {
  props: {
    options: {}
  },
  methods: {},
  ready: function () {
    let id = '#' + this.options.id
    let swiper = new Swiper(id, {
      width: this.options.width,
      height: this.options.height,
      pagination: '.' + this.options.pagination,
      direction: this.options.direction,
      loop: this.options.loop,
      effect: this.options.effect,
      coverflow: this.options.coverflow,
      cube: this.options.cube
    })
    console.log(swiper.isBeginning)
  },
  watch: {
    options () {}
  }
}
</script>

<style lang="scss">
  @import '../../node_modules/swiper/dist/css/swiper.min.css';
  .swiper-wrapper {
    .swiper-slide {
      a {display: inline-block;width: 100%;height: 100%;background-size: cover;background-position: center;}
    }
  }
  .swiper-container-vertical {
    .swiper-pagination {
      right: 10px;
      top: 50%;
      -webkit-transform: translate3d(0,-50%,0);
      -ms-transform: translate3d(0,-50%,0);
      transform: translate3d(0,-50%,0);
      .swiper-pagination-bullet {margin: 0.2rem 0 !important;background: none;border:1px solid #fff;opacity: 1;}
      .swiper-pagination-bullet-active {background-color: rgba(255,255,255,0.5);}
    }
  }
</style>
