<template>
  <div>
    <div id="toast" transition="fade" v-if="options.show">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="{{options.iconClass}}"></i>
          <p class="weui-toast__content">{{options.msg}}</p>
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
  .fade-transition {
    .weui-toast {
      transition: all .2s ease;
      opacity: 1;
    }
  }
  .fade-enter,
  .fade-leave {
    .weui-toast {
      opacity: 0;
    }
  }
</style>
