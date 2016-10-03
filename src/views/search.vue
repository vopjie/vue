<template>
  <section>
    <div class="page__bd">
      <div class="weui-search-bar" v-bind:class="{'weui-search-bar_focusing':isFocus}" id="search_bar">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索" required="" v-model="searchText" autocomplete="off">
            <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
          </div>
          <label for="search_input" class="weui-search-bar__label" id="search_text" v-on:click="focus()">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel" v-on:click="blur()">取消</a>
      </div>
      <div class="weui-cells weui-cells_access search_show" id="search_show" v-if="searchText">
        <div class="weui-cell" v-for="user in family | filterBy searchText">
          <div class="weui-cell__bd weui-cell_primary">
            <span>{{user.name}}</span>
            <span class="fr">{{user.age}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
module.exports = {
  data: function () {
    return {
      isFocus: false,
      family: [
        {
          role: 'father',
          age: '42',
          name: 'Snfow DiCaprio'
        },
        {
          role: 'mather',
          age: '40',
          name: 'Jiebk Smith'
        },
        {
          role: 'borther',
          age: '21',
          name: 'Quite Smith'
        },
        {
          role: 'grandpa',
          age: '72',
          name: 'zip DiCaprio'
        },
        {
          role: 'grandma',
          age: '70',
          name: 'vuex Jacky'
        },
        {
          role: 'douther',
          age: '12',
          name: 'Cocgo DiCaprio'
        },
        {
          role: 'son',
          age: '22',
          name: 'Leonardo DiCaprio'
        }
      ],
      searchText: ''
    }
  },
  methods: {
    focus: function () {
      this.isFocus = true
    },
    blur: function () {
      this.isFocus = false
      this.searchText = ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .fr {float: right;}
</style>
