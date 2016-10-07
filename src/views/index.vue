<template>
  <section>
    <div class="logo">
      <img class="flipInY" src="../../static/images/logo.png">
      <p>version:1.0.28</p>
    </div>
    <div class="row">
      <div class="page__bd page__bd_spacing">
          <ul>
            <li>
              <a href="./charts.html">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Charts</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/touch' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Touch</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/page' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">PullDown && PullUp </p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/swiper' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Swiper</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/form', query: { id: 1991,name:'揭志勇' }}">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Form</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/filter' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Fliter</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/search' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Search with Fliter</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/dialog' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Dialog</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/loading' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Loading</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/toast' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Toast</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/notice' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Notice</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
            <li>
              <a v-link="{ path: '/person' }">
                <div class="weui-flex js_category">
                    <p class="weui-flex__item">Person</p>
                    <img src="../../static/images/icon_nav_nav.png" alt="">
                </div>
              </a>
            </li>
          </ul>
      </div>
    </div>
  </section>

</template>

<script>
module.exports = {
  route:{
    data() {
      // 每次切换路由，在渲染出页面前都会执行
    }
  }
}
</script>

<style lang="scss">

</style>
