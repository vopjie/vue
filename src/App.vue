<template>
  <div id="container" class="index">
    <section>
      <div class="logo">
        <img class="flipInY" src="./assets/images/logo.png">
        <p>version:1.0.28</p>
      </div>
      <div class="row">
        <div class="page__bd page__bd_spacing">
            <ul>
              <li>
                <a v-link="{ path: '/charts' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Charts</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/touch' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Touch</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/page' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">PullDown && PullUp </p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/swiper' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Swiper</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/form', query: { id: 1991,name:'揭志勇' }}">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Form</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/filter' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Fliter</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/search' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Search with Fliter</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/dialog' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Dialog</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/loading' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Loading</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/toast' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Toast</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/notice' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Notice</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
              <li>
                <a v-link="{ path: '/person' }">
                  <div class="weui-flex js_category">
                      <p class="weui-flex__item">Person</p>
                      <img src="./assets/images/icon_nav_nav.png" alt="">
                  </div>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </section>
    <router-view transition="outLeftInRight"></router-view>
  </div>
</template>

<script>
module.exports = {

}
</script>

<style lang="scss">
.weui-btn_primary {
  background-color: #41b883 !important;
}
.weui-btn_disabled {opacity: .8;}
#container {position: relative;width: 100%;height: 100%;}
section {width: 100%;top: 0;left: 0;position: fixed;background-color: #f8f8f8;height: 100vh;overflow-y: scroll;overflow-x: hidden;}
body,html{height:100%;-webkit-tap-highlight-color:transparent}
body{font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif;color: #555;font-size: 14px;overflow-x: hidden;}
ul{list-style:none}
.index {
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
@import "./assets/sass/_mixin.scss";
.flipInY {@include flipInY();}
.outLeftInRight-transition {

}
.outLeftInRight-enter {
  z-index: 2;
  @include slideInRight(.4s,ease-out,0s,false);
}
.outLeftInRight-leave {
  @include slideOutLeft(.4s,ease-out,0s,false);
}
</style>
