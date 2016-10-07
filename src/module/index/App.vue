<template>
  <div class="container">
    <router-view transition="fade"></router-view>
  </div>
</template>

<script>
module.exports = {

}
</script>

<style lang="scss">
@import "../../../static/sass/_mixin.scss";
.bounce {@include bounce();}
.logo {text-align: center;padding-top: .5rem;
  img {width: 3rem;}
}
.weui-btn_primary {
  background-color: #41b883 !important;
}
.weui-btn_disabled {opacity: .8;}
#container {position: relative;width: 100%;height: 100%;}
section {width: 100%;background-color: #f8f8f8;min-height: 100vh;}
body,html{-webkit-tap-highlight-color:transparent}
body{font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif;color: #555;font-size: 14px;overflow-x: hidden;}
ul{list-style:none}
.container {
  .logo {text-align: center;
    p {font-size: .5rem;color:#999;margin-bottom: 10px;}
  }
  body{background-color:#f8f8f8}
  .container{overflow:hidden}
  ul {margin-bottom: 5px;overflow: hidden;}
  .page__bd_spacing{padding:0 15px}
  .page__bd img{width:30px;height:30px}
  .page__bd li{margin:10px 0;background-color:#fff;overflow:hidden;border-radius:2px;cursor:pointer}
  .page__bd li.js_show .weui-flex{opacity:.4}
  .page__bd li:first-child{margin-top:0}
  li {
    a {display: inline-block;width: 100%;height:100%;color: #42b983;
      &:visited {color: #999;}
      &:active,&:hover {color: red;}
    }
    p {font-size: .4rem;}
  }
  .weui-flex{padding:20px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:.3s;transition:.3s}
}
.flipInY {@include flipInY();}
.fade-transition {

}
.fade-enter {
  @include fadeIn(.1s,ease,0s,false);
}
.fade-leave {
  @include fadeOut(.1s,ease,0s,false);
}
</style>
