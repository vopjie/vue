<template>
  <section>
    <div class="logo">
      <img class="bounce" src="../../static/images/logo.png">
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="showToast">Toast</a>
    </div>
    <toast :options.sync="options" :show.sync="options.show"></toast>
  </section>
</template>
<script>
import Toast from '../components/Toast'
module.exports = {
  components: {Toast},
  data: function () {
    return {
      options: {}
    }
  },
  methods: {
    showToast: function (event) {
      this.options = {
        show: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .weui-btn-area {position: absolute;bottom: 0;left: 0;right: 0;margin-bottom: 15px;}
</style>
