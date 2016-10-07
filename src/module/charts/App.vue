<!-- vue && vue-echarts 构建实时图表-->
<template>
  <section>
    <chart :options="gauge"></chart>
  </section>
</template>
<script>
import ECharts from '../../components/ECharts.vue'
module.exports = {
  components: {'chart': ECharts},
  data: function () {
    return {
      gauge: {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
          }
        ]
      }
    }
  },
  ready: function () {
    let self = this
    self.timeTicket = setInterval(function () {
      self.gauge.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
    }, 2000)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .echarts {
    width: 100%;height: 100vh;
  }
</style>
