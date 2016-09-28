<template>
<section class="index container">

  <div class="logo">
    <img src="./assets/images/logo.png">
  </div>
  <div class="row">
    <div class="col-xs-4 col-md-3 col-lg-2"></div>
    <div class="page__bd page__bd_spacing">
        <ul>
            <li class="">
              <a v-link="{ path: '/slide' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">轮播</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/form' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">表单</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/table' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">表格</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/loading' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">加载</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/page' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">普通分页</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/page-pull' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">上拉加载 & 下拉刷新</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/filter' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">搜索过滤</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/dialog' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">提示弹框</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li class="">
              <a v-link="{ path: '/charts' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">图表</p>
                    <img src="./assets/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
        </ul>
    </div>
  </div>
</section>
<router-view></router-view>
</template>

<script>
// import Hello from './components/Hello'
//
// export default {
//   components: {
//     Hello
//   }
// }
</script>

<style lang="scss">
body,html{height:100%;-webkit-tap-highlight-color:transparent}
body{font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif;background-color: #f8f8f8;color: #555;}
ul{list-style:none}
.index {
  .logo {text-align: center;line-height: 0;}
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
.animated{-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}
@-webkit-keyframes slideInLeft{
    0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}
    100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
}
@keyframes slideInLeft{
    0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}
    100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
}
.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}
@-webkit-keyframes slideInRight{
    0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}
    100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0)}
}
@keyframes slideInRight{
    0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}
    100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
}
.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}
@-webkit-keyframes slideOutLeft{
    0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
    100%{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%)}
}
@keyframes slideOutLeft{
    0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
    100%{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}
}
.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}
@-webkit-keyframes slideOutRight{
    0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
    100%{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%)}
}
@keyframes slideOutRight{
    0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
    100%{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}
}
.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}
</style>
