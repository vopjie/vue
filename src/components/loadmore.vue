<template>
  <div class="mint-loadmore">
    <div class="mint-loadmore-content" :class="{ 'is-dropped': topDropped || bottomDropped}" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }" v-el:loadmore-content>
      <slot name="top">
        <div class="mint-loadmore-top" v-if="topMethod">
          <i v-if="topStatus !== 'loading'" v-bind:class="{ 'rotate': topStatus === 'drop' }" class="spinner"></i>
          <i v-if="topStatus === 'loading'" class="weui-loading"></i>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <div class="mint-loadmore-bottom" v-if="bottomMethod">
          <i v-if="bottomStatus !== 'loading'" v-bind:class="{ 'rotate': bottomStatus !== 'drop' }" class="spinner"></i>
          <i v-if="bottomStatus === 'loading'" class="weui-loading"></i>
          <span class="mint-loadmore-text">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<style>
  .spinner {
    transition: .2s;
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    background: url(../../static/images/pull-icon.png);
    background-size: .4rem;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .spinner.rotate {
    transform:rotate(-180deg) translateZ(0);
  }
  @component-namespace mint {
    @component loadmore {
      overflow: hidden;

      @descendent content {
        @when dropped {
          transition: .2s;
        }
      }

      @descendent top, bottom {
        text-align: center;
        height: 50px;
        line-height: 50px;
      }

      @descendent top {
        margin-top: -50px;
      }

      @descendent bottom {
        margin-bottom: -50px;
      }

      @descendent spinner {
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
      }

      @descendent text {
        vertical-align: middle;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    name: 'mt-loadmore',
    props: {
      autoFill: {
        type: Boolean,
        default: false
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '更新中...'
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      topStatus: {
        type: String,
        default: ''
      },
      bottomPullText: {
        type: String,
        default: '上拉加载更多'
      },
      bottomDropText: {
        type: String,
        default: '释放加载'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomStatus: {
        type: String,
        default: ''
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        uuid: null,
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,
        startScrollTop: 0,
        currentY: 0
      }
    },

    watch: {
      topStatus (val) {
        switch (val) {
          case 'pull':
            this.topText = this.topPullText
            break
          case 'drop':
            this.topText = this.topDropText
            break
          case 'loading':
            this.topText = this.topLoadingText
            break
        }
      },

      bottomStatus (val) {
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText
            break
          case 'drop':
            this.bottomText = this.bottomDropText
            break
          case 'loading':
            this.bottomText = this.bottomLoadingText
            break
        }
      }
    },

    events: {
      onTopLoaded (id) {
        if (id === this.uuid) {
          setTimeout(() => {
            this.translate = 0
            this.topStatus = 'pull'
          }, 200)
        }
      },

      onBottomLoaded (id) {
        this.bottomStatus = 'pull'
        this.bottomDropped = false
        if (id === this.uuid) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              document.body.scrollTop += 50
            } else {
              this.scrollEventTarget.scrollTop += 50
            }
            this.translate = 0
          })
        }
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer()
        }
      }
    },

    methods: {
      getScrollEventTarget (element) {
        let currentNode = element
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode
          }
          currentNode = currentNode.parentNode
        }
        return window
      },

      getScrollTop (element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
        } else {
          return element.scrollTop
        }
      },

      bindTouchEvents () {
        this.$el.addEventListener('touchstart', this.handleTouchStart)
        this.$el.addEventListener('touchmove', this.handleTouchMove)
        this.$el.addEventListener('touchend', this.handleTouchEnd)
      },

      init () {
        this.topStatus = 'pull'
        this.bottomStatus = 'pull'
        this.topText = this.topPullText
        this.scrollEventTarget = this.getScrollEventTarget(this.$el)
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer()
          this.bindTouchEvents()
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents()
        }
      },

      fillContainer () {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= this.scrollEventTarget.getBoundingClientRect().bottom
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading'
              this.bottomMethod(this.uuid)
            }
          })
        }
      },

      checkBottomReached () {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight === document.body.scrollHeight
        } else {
          return this.$el.getBoundingClientRect().bottom - 1 <= this.scrollEventTarget.getBoundingClientRect().bottom
        }
      },

      handleTouchStart (event) {
        this.startY = event.touches[0].clientY
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget)
        this.bottomReached = false
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull'
          this.topDropped = false
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull'
          this.bottomDropped = false
        }
      },

      handleTouchMove (event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return
        }
        this.currentY = event.touches[0].clientY
        let distance = this.currentY - this.startY
        this.direction = distance > 0 ? 'down' : 'up'
        if (typeof this.topMethod === 'function' && this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault()
          event.stopPropagation()
          this.translate = distance - this.startScrollTop
          if (this.translate < 0) {
            this.translate = 0
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull'
        }

        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached()
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' && this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault()
          event.stopPropagation()
          this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance
          if (this.translate > 0) {
            this.translate = 0
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull'
        }
      },

      handleTouchEnd () {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true
          if (this.topStatus === 'drop') {
            this.translate = '50'
            this.topStatus = 'loading'
            this.topMethod(this.uuid)
          } else {
            this.translate = '0'
            this.topStatus = 'pull'
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true
          this.bottomReached = false
          if (this.bottomStatus === 'drop') {
            this.translate = '-50'
            this.bottomStatus = 'loading'
            this.bottomMethod(this.uuid)
          } else {
            this.translate = '0'
            this.bottomStatus = 'pull'
          }
        }
        this.direction = ''
      }
    },

    ready () {
      this.uuid = Math.random().toString(36).substring(3, 8)
      this.init()
    }
  }
</script>

<style scoped>
  .mint-loadmore{overflow:hidden}.mint-loadmore-content.is-dropped{-webkit-transition:.2s;transition:.2s}.mint-loadmore-bottom,.mint-loadmore-top{text-align:center;height:50px;line-height:50px}.mint-loadmore-top{margin-top:-50px}.mint-loadmore-bottom{margin-bottom:-50px}.mint-loadmore-spinner{display:inline-block;margin-right:5px;vertical-align:middle}.mint-loadmore-text{vertical-align:middle}.kebab-spinner-fading-circle{position:relative}.kebab-spinner-fading-circle-circle{width:100%;height:100%;top:0;left:0;position:absolute}.kebab-spinner-fading-circle-circle:before{content:" ";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;-webkit-animation:kebab-fading-circle 1.2s infinite ease-in-out both;animation:kebab-fading-circle 1.2s infinite ease-in-out both}.kebab-spinner-fading-circle-circle.is-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.kebab-spinner-fading-circle-circle.is-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.kebab-spinner-fading-circle-circle.is-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.kebab-spinner-fading-circle-circle.is-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.kebab-spinner-fading-circle-circle.is-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.kebab-spinner-fading-circle-circle.is-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.kebab-spinner-fading-circle-circle.is-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.kebab-spinner-fading-circle-circle.is-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.kebab-spinner-fading-circle-circle.is-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.kebab-spinner-fading-circle-circle.is-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.kebab-spinner-fading-circle-circle.is-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.kebab-spinner-fading-circle-circle.is-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.kebab-spinner-fading-circle-circle.is-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.kebab-spinner-fading-circle-circle.is-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.kebab-spinner-fading-circle-circle.is-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.kebab-spinner-fading-circle-circle.is-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.kebab-spinner-fading-circle-circle.is-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.kebab-spinner-fading-circle-circle.is-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.kebab-spinner-fading-circle-circle.is-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.kebab-spinner-fading-circle-circle.is-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.kebab-spinner-fading-circle-circle.is-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.kebab-spinner-fading-circle-circle.is-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes kebab-fading-circle{0%,39%,to{opacity:0}40%{opacity:1}}@keyframes kebab-fading-circle{0%,39%,to{opacity:0}40%{opacity:1}}
</style>
