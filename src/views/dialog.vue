<template>
  <section>
    <div class="logo">
      <img class="bounce" src="../../static/images/logo.png">
    </div>
    <button-area slot="operation">
      <weui-button type="primary" @click="showDialog(1)">Dialog</weui-button>
    </button-area>
    <dialog v-if="dialog1Show" type="confirm" title="弹窗标题"
      confirm-button="确认关闭" cancel-button="不关闭"
      @weui-dialog-confirm="handleDialogAction('确定', 1)"
      @weui-dialog-cancel="handleDialogAction('取消', 1)">
      自定义弹窗内容
      <br>
      ...
    </dialog>
  </section>
</template>
<script>
import Dialog from '../components/dialog/dialog.vue'
import ButtonArea from '../components/button/button-area.vue'
import Button from '../components/button/button.vue'
module.exports = {
  components: {Dialog, 'button-area': ButtonArea,'weui-button': Button},
  data: function () {
    return {
      dialog1Show: false
    }
  },
  methods: {
    showDialog: function (id) {
      this[`dialog${id}Show`] = true
    },
    handleDialogAction(action, id) {
      if (action === '确定') {
        this[`dialog${id}Show`] = false
      } else {
        alert('你点击了“不关闭”，所以对话框不会消失^^')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .weui-btn-area {position: absolute;bottom: 0;left: 0;right: 0;margin-bottom: 15px;}
</style>
