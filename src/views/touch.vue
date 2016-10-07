<template>
  <section>
    <div class="weui-panel weui-panel_access" v-for="(index, item) in items" transition="extand"
    v-touch:swipeleft="swipeleftFunc(index)" v-touch:swiperight="swiperightFunc()" v-bind:class="{'swipeleft': isOpen == index}" v-touch:tap="tapFunc(item)">
      <div class="weui-panel__hd">vue && vue-touch <span class="fr">{{item.name}}</span></div>
      <div class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media__hd">
            <img class="weui-media__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
          </div>
          <div class="weui-media__bd">
            <h4 class="weui-media__title">swipeleft</h4>
            <p class="weui-media__desc">vue && vue-touch 向左滑动显示删除按钮，tap删除按钮以动画形式删除元素</p>
          </div>
        </a>
      </div>
      <button type="button" v-touch:tap="deleteFunc(index)">删除</button>
    </div>
    <div class="weui-msg" v-if="!items.length">
      <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <p class="weui-msg__desc">没有更多数据了哦</p>
      </div>
    </div>
  </section>
</template>
<script>
module.exports = {
  data: function () {
    return {
      isOpen: -1,
      items: [
        {id: 0, name: 'A'},
        {id: 1, name: 'B'},
        {id: 2, name: 'C'},
        {id: 3, name: 'D'},
        {id: 4, name: 'E'},
        {id: 5, name: 'F'},
        {id: 6, name: 'G'},
        {id: 7, name: 'H'},
        {id: 8, name: 'I'},
        {id: 9, name: 'J'},
        {id: 10, name: 'K'}
      ]
    }
  },
  methods: {
    tapFunc: function (item) {
      this.isOpen = null
      // console.log(this.items.indexOf(item))
    },
    swipeleftFunc: function (index) {
      this.isOpen = index
    },
    swiperightFunc: function () {
      this.isOpen = null
    },
    deleteFunc: function (index) {
      this.items.splice(index, 1)
      this.isOpen = null
      window.event.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
  .fr {float: right;}
  .weui-panel {height: 3.39rem;
    .weui-panel__hd,a {
      transition: all .2s ease 0s;z-index: 1;background: #fff;
    }
    button {position: absolute;right: 0;top:0;background: red;color:#fff;width: 1.5rem;height: 100%;border:none;}
  }
  .swipeleft {
    .weui-panel__hd,a {
      transform:translateX(-1.5rem);
    }
  }
  .extand-transition {
    transition: all .2s ease 0s;
    opacity: 1;
  }
  .extand-enter,
  .extand-leave {
    opacity: 0;
    margin:0;
    height: 0;
  }
</style>
