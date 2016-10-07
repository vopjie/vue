<template>
  <section>
    <div class="logo">
      <img class="bounce" src="../../static/images/logo.png">
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="showNotice">Notice</a>
    </div>
    <notice :options.sync="options" :show.sync="options.show"></notice>
  </section>
</template>
<script>
import Notice from '../components/Notice'
module.exports = {
  components: {Notice},
  data: function () {
    return {
      options: {}
    }
  },
  methods: {
    showNotice: function (event) {
      this.options = {
        show: true,
        autoClose: false,
        msg: 'autoClose = true 时，3秒后自动关闭该消息！'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .weui-btn-area {position: absolute;bottom: 0;left: 0;right: 0;margin-bottom: 15px;}
</style>
