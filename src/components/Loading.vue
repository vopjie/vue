<template>
  <div>
    <div id="loadingToast" v-if="options.show">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-loading weui-icon_toast"></i>
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
  }
}
</script>

<style scoped lang="scss">

</style>
