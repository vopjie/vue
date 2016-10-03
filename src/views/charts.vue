<template>
  <section>
    <div id="echarts"></div>
  </section>
</template>
<script>
var echarts = require('echarts')
module.exports = {
  data: function () {
    return {
      options: {}
    }
  },
  ready: function () {
    var myChart = echarts.init(document.getElementById('echarts'))
    myChart.showLoading()
    let option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {}
      //   }
      // },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 50, name: '完成率'}]
        }
      ]
    }
    myChart.setOption(option)
    myChart.hideLoading()
    this.timeTicket = setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      myChart.setOption(option, true)
    }, 2000)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  #echarts {width: 100%;height: 100vh;}
</style>
