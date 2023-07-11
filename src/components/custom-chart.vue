<template>
  <Card title="测试echarts">
    <p>echart version: {{ data_echartVersion }}</p>
    <div class="chart-wrapper" ref="chartRef"></div>
  </Card>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      data_echartVersion: ''
    }
  },
  mounted() {
    this.data_echartVersion = echarts.version
    this.chart = echarts.init(this.$refs.chartRef)
    this.draw()
  },
  methods: {
    draw() {
      this.chart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      })
    }
  }
};
</script>

<style scoped lang="less">
.chart-wrapper {
  width: 100%;
  height: 200px;
}
</style>
