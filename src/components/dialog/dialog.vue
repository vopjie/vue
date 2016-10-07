<template>
<div :class="'weui-dialog__' + type">
  <div class="weui-mask"></div>
  <div class="weui-dialog">
    <div class="weui-dialog__hd">
      <div class="weui-dialog__title">{{title}}</div>
    </div>
    <div class="weui-dialog__bd"><slot></slot></div>
    <div class="weui-dialog__ft">
      <a v-if="type === 'confirm'" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="dispathEventAndClose('weui-dialog-cancel')">{{cancelButton}}</a>
      <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="dispathEventAndClose('weui-dialog-confirm')">{{confirmButton}}</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    /**
     * 对话框类型
     * alert: 提示框，只包含确定按钮（默认）
     * confirm: 询问框，包含确定和取消按钮
     */
    type: {
      type: String,
      required: false,
      default: 'alert'
    },

    /**
     * 对话框标题
     */
    title: {
      type: String,
      required: true
    },

    /**
     * 确定按钮名称
     */
    confirmButton: {
      type: String,
      required: false,
      default: '确定'
    },

    /**
     * 取消按钮名称
     */
    cancelButton: {
      type: String,
      required: false,
      default: '取消'
    }

  },

  methods: {
    dispathEventAndClose(event) {
      this.$dispatch(event);
    }
  }
}
</script>
