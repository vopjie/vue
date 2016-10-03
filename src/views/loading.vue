<template>
  <section>
    <loading :options.sync="options" :show.sync="options.show"></loading>
  </section>
</template>
<script>
import Loading from '../components/Loading'
module.exports = {
  components: {Loading},
  data: function () {
    return {
      options: {
        show: true,
        msg: '数据加载中'
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
