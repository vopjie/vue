<template>
  <section>
    <div class="logo">
      <img class="bounce" src="../assets/images/logo.png">
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="showDialog">Dialog</a>
    </div>
    <dialog :options.sync="options" :show.sync="options.show"></dialog>
    <toast :options.sync="toastOptions" :show.sync="toastOptions.show"></toast>
  </section>
</template>
<script>
import Dialog from '../components/Dialog'
import Toast from '../components/Toast'
module.exports = {
  components: {Dialog, Toast},
  data: function () {
    return {
      options: {},
      toastOptions: {}
    }
  },
  methods: {
    showDialog: function (event) {
      let self = this
      this.options = {
        confirm: true,
        show: true,
        autoClose: false,
        title: '操作提示',
        msg: '确认要这么做吗？',
        cancelTxt: '取消',
        confirmTxt: '确认',
        confirmFunc: function () {
          self.toastOptions = {
            show: true,
            autoClose: true,
            msg: '已确认',
            iconClass: 'weui-icon-success-no-circle weui-icon_toast'
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .weui-btn-area {position: absolute;bottom: 0;left: 0;right: 0;margin-bottom: 15px;}
</style>
