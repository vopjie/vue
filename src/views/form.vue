<template>
  <section>
    <div class="logo">
      <img class="bounce" src="../assets/images/logo.png">
    </div>
    <validator name="validation_login">
      <form>
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">手机</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" type="tel"  placeholder="请输入手机" maxlength="11"
                v-model="phone" v-validate:phone="['tel']" @valid="telValidFunc" @invalid="telInvalidFunc">
              </div>
          </div>
          <div class="weui-cell">
              <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
              <div class="weui-cell__bd">
                <input class="weui-input" type="password" placeholder="请输入密码" maxlength="20"
                v-model="password" v-validate:password="['password']" @valid="passwordValidFunc" @invalid="passwordInvalidFunc">
              </div>
          </div>
        </div>
        <label for="agree" class="weui-agree">
          <input id="agree" type="checkbox" class="weui-agree__checkbox"
           v-model="agree" v-validate:agree="{required: true}" @valid="agreeValidFunc" @invalid="agreeInvalidFunc">
          <span class="weui-agree__text">
            阅读并同意<a href="javascript:void(0);">《相关条款》</a>
          </span>
        </label>
        <div class="weui-btn-area">
          <button class="weui-btn weui-btn_primary" v-bind:class="{ 'weui-btn_disabled': !telValid || !passwordValid || !agreenValid}" v-on:click='login()'>登录</button>
        </div>
      </form>
    </validator>
    <dialog :options.sync="dialogOptions" :show.sync="dialogOptions.show"></dialog>
    <loading :options.sync="loadingOptions" :show.sync="loadingOptions.show"></loading>
  </section>
</template>
<script>
require('../validation')
import Dialog from '../components/Dialog'
import Loading from '../components/Loading'
module.exports = {
  components: {Dialog, Loading},
  data: function () {
    return {
      phone: '',
      password: '',
      agree: '',
      telValid: false,
      passwordValid: false,
      agreenValid: false,
      dialogOptions: {},
      loadingOptions: {}
    }
  },
  methods: {
    telValidFunc () {
      this.telValid = true
    },
    passwordValidFunc () {
      this.passwordValid = true
    },
    agreeValidFunc () {
      this.agreenValid = true
    },
    telInvalidFunc () {
      this.telValid = false
    },
    passwordInvalidFunc () {
      this.passwordValid = false
    },
    agreeInvalidFunc () {
      this.agreenValid = false
    },
    login () {
      var self = this
      self.$validate(true, function () {
        if (self.$validation_login.phone.invalid) {
          self.dialogOptions = {
            show: true,
            title: '温馨提示',
            msg: '请填写11位数正确的手机号',
            confirmTxt: '知道了'
          }
          return false
        }
        if (self.$validation_login.password.invalid) {
          self.dialogOptions = {
            show: true,
            title: '温馨提示',
            msg: '密码应该为6-20位',
            confirmTxt: '知道了'
          }
          return false
        }
        if (self.$validation_login.agree.invalid) {
          self.dialogOptions = {
            show: true,
            title: '温馨提示',
            msg: '你还没有同意相关条款哦',
            confirmTxt: '知道了'
          }
          return false
        }
        if (self.$validation_login.invalid) {
          // 验证未通过
          return false
        } else {
          self.loadingOptions = {
            show: true,
            msg: '加载中'
          }
          // 验证通过做注册请求
          // self.$http.post('http://192.168.30.235:9999/rest/user/login', {'phone': self.phone, 'password': self.password}).then(function (response) {
          //   if (response.data.code === '0') {
          //     // 登录成功
          window.localStorage.userId = true
          setTimeout(function () {
            self.$router.go('/person')
          }, 1000)
          //   } else {
          //     // 登录失败
          //   }
          // }, function (error) {
          //   console.log(error)
          // })
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/sass/_mixin.scss";
  .bounce {@include bounce();}
  .logo {text-align: center;padding-top: .5rem;
    img {width: 3rem;}
  }
</style>
