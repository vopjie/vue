<template>
  <div>
    <div class="notification {{options.type}}" v-if="options.show" transition="slide">
      <div class="content">
        {{{ options.msg }}}
      </div>
      <div class="delete" v-if="!options.autoClose" @click="close()"></div>
    </div>
  </div>
</template>

<script>
export default {
  // data: function () {
  //   return {
  //     options: {
  //       show: true,
  //       autoClose: true,
  //       msg: '2秒后自动关闭该消息！',
  //       type: 'default'
  //     }
  //   }
  // },
  props: {
    options: {}
  },
  methods: {
    close () {
      this.options = {}
    }
  },
  watch: {
    options () {
      if (this.options.autoClose) {
        setTimeout(() => {
          this.close()
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
  .slide-transition {
    transition: all .25s ease;
    transform: translateZ(0);
  }
  .slide-enter,
  .slide-leave {
    transform: translate3d(0, -100%, 0);
  }
  .delete {
    position: absolute;
    right: .32rem;
    top:.3rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    display: inline-block;
    height: 24px;
    vertical-align: top;
    width: 24px;
  }
  .delete:after,
  .delete:before {
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    margin-left: -25%;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 50%;
  }
  .delete:before {
    transform: rotate(45deg);
  }
  .delete:after {
    transform: rotate(-45deg);
  }
  .delete:hover {
    background: rgba(51, 51, 51, .2);
  }
  .notification {
    width: 100%;
    line-height: 1.5;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
  }
  .notification {background: rgba(0,0,0,.5);color:#fff;}
  .notification.success {background: #179b16;color:#fff;}
  .notification .content {
    padding: .32rem 1.2rem .32rem .32rem;
  }
</style>
