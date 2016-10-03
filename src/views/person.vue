<template>
  <section>
    <div class="weui-tab">
      <div class="weui-tab__panel">
        <div class="weui-msg">
          <div class="weui-msg__icon-area">
            <div class="logo">
              <img class="bounce" src="../assets/images/logo.png">
            </div>
          </div>
          <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">个人中心</h2>
            <p class="weui-msg__desc" v-show="userId">"v-show" 判断：当前已登录</p>
          </div>
          <div class="weui-msg__opr-area">
            <div class="weui-btn-area">
              <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="loginOut">退出登录</a>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-tabbar">
          <a class="weui-tabbar__item" v-link="{ path: '/index' }">
              <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">Home</p>
          </a>
          <a class="weui-tabbar__item" v-link="{ path: '/swiper' }">
              <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">Swiper</p>
          </a>
          <a class="weui-tabbar__item" v-link="{ path: '/charts' }">
              <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">C harts</p>
          </a>
          <a class="weui-tabbar__item weui-bar__item_on" v-link="{ path: '/person' }">
              <img src="../assets/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
              <p class="weui-tabbar__label">Person</p>
          </a>
      </div>
    </div>
    <toast :options.sync="options" :show.sync="options.show"><toast>
  </section>
</template>
<script>
import Toast from '../components/Toast'
module.exports = {
  components: {Toast},
  data: function () {
    return {
      userId: window.localStorage.userId,
      options: {}
    }
  },
  methods: {
    loginOut: function (event) {
      window.localStorage.removeItem('userId')
      this.options = {
        show: true,
        autoClose: true,
        msg: '已退出',
        iconClass: 'weui-icon-success-no-circle weui-icon_toast'
      }
      this.$router.go('/index')
    }
  }
}
</script>
<style lang="scss" scoped>
  .icon-box {text-align: center;}
  .weui-msg {
    padding-top: 36px;
    text-align: center;
  }
  .weui-msg__icon-area {
    margin-bottom: 30px;
  }
  .weui-msg__text-area {
    margin-bottom: 25px;
    padding: 0 20px;
  }
  .weui-msg__title {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 20px;
  }
  .weui-msg__desc {
    font-size: 14px;
    color: #999999;
  }
  .weui-msg__text-area a {
    color: #586C94;
  }
  .weui-msg__opr-area {
    margin-bottom: 25px;
  }
</style>
