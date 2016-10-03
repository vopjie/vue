<template>
  <div>
    <div id="dialog" transition="zoom" v-if="options.show">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
          <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{options.title}}</strong></div>
          <div class="weui-dialog__bd">{{options.msg}}</div>
          <div class="weui-dialog__ft">
              <a v-if="options.confirm" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="cancelFunc(options.cancelFunc)">{{options.cancelTxt}}</a>
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="confirmFunc(options.confirmFunc)">{{options.confirmTxt}}</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {}
  },
  methods: {
    close () {
      this.options = {}
    },
    cancelFunc (func) {
      this.close()
      if (func) {
        func()
      }
    },
    confirmFunc (func) {
      this.close()
      if (func) {
        func()
      }
    }
  },
  watch: {
    options () {
      if (this.options.autoClose) {
        setTimeout(() => {
          this.close()
        }, 2000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .zoom-transition {
    .weui-dialog {
      opacity: 1;
      transition: all .25s ease 0s;
      transform:translate(-50%,-50%) scale(1);
    }
  }
  .zoom-enter,.zoom-leave {
    .weui-dialog {
      opacity: 0;
      transform:translate(-50%,-50%) scale(.3);
    }
  }
</style>
