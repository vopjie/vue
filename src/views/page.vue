<template>
  <section id="scroller">
    <loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :top-status.sync="topStatus" :bottom-status.sync="bottomStatus">
      <div class="data-wrap">
        <div class="weui-panel weui-panel_access" v-for="item in items">
          <div class="weui-panel__hd">{{$index}} 图文组合列表<span class="fr">ID：{{item.id}}</span></div>
          <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
              <div class="weui-media__hd">
                <img class="weui-media__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
              </div>
              <div class="weui-media__bd">
                <h4 class="weui-media__title">Name：{{item.name}}</h4>
                <p class="weui-media__desc">vue && iscroll 下拉刷新，上拉加载下一页</p>
              </div>
            </a>
          </div>
          <div class="weui-panel__ft">
            <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
              <div class="weui-cell__bd">查看更多</div>
              <span class="weui-cell__ft"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="weui-loadmore weui-loadmore_line" v-if="allLoaded && items.length">
        <span class="weui-loadmore__tips">没有更多数据了哦</span>
      </div>
    </loadmore>
    <div class="weui-msg" v-if="showTip">
      <div class="weui-msg__icon-area"><i class="weui-icon-warn weui-icon_msg"></i></div>
      <div class="weui-msg__text-area">
        <p class="weui-msg__desc">暂时没有数据哦</p>
      </div>
    </div>
  </section>
</template>
<script>
// vue-resource
var VueResource = require('vue-resource')
Vue.use(VueResource)
import Loadmore from '../components/loadmore'
module.exports = {
  components: {Loadmore},
  data: function () {
    return {
      items: [],
      pn: 1,
      ps: 5,
      allLoaded: false,
      topStatus: '',
      bottomStatus: '',
      showTip: false
    }
  },
  // http: {
  //   root: '.',
  //   headers: {
  //     Authorization: 'Basic YXBpOnBhc3N3b3Jk'
  //   }
  // },
  methods: {
    getDate: function (type, callBack) {
      this.$http({
        method: 'GET',
        url: 'static/data/list.json',
        data: {'pn': this.pn, 'ps': this.ps},
        headers: {'Authorization': 'Basic YXBpOnBhc3N3b3Jk'},
        emulateJSON: true
      }).then(function (response) {
        let data = response.body
        if (data.code === '0') {
          if (data.data.list.length === '0') {
            this.showTip = true
          }
          if (data.data.list.length < this.ps) {
            this.allLoaded = true
          }
          if (type === 'down') {
            this.items = data.data.list
          } else {
            this.items = this.items.concat(data.data.list)
          }
          if (callBack) {
            callBack()
          }
        } else {
          window.alert('网络或服务器异常')
        }
      }, function (error) {
        console.log(error)
      })
      this.pn ++
    },
    loadTop (id) {
      let self = this
      self.pn = 1
      self.getDate('down', function () {
        self.$broadcast('onTopLoaded', id)
      })
    },
    loadBottom (id) {
      let self = this
      self.getDate('up', function () {
        self.$broadcast('onBottomLoaded', id)
      })
    }
  },
  compiled () {
    this.getDate()
  }
}
</script>

<style lang="scss">
#scroller {height: 100vh;overflow-y: scroll;}
.fr {float: right;}
.data_wrap {min-height:100vh;}
.scroller-wrap {
  position: relative!important;
  .scroller-container {
    width: 100%;
  }
}
.weui-media-box_appmsg .weui-media__hd {
  margin-right: .8em;
  width: 1.6rem;
  height: 1.6rem;
  text-align: center;
  flex-shrink: 0;
}
.weui-media-box_appmsg .weui-media__thumb {
  width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.weui-media-box_appmsg .weui-media__bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}
.weui-media__title {
  font-weight: 400;
  font-size: 17px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  word-wrap: break-word;
  word-break: break-all;
}
.weui-media__desc {
  color: #999999;
  font-size: 13px;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.weui-loadmore {margin:2em auto 0;
  .weui-loadmore__tips {background: #f5f5f5;}
}
</style>
