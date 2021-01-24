<template>
  <div class="home">
    <!-- <img src="../../assets/bg.jpg"> -->
    <div ref="barChart" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script lang="ts">
import echarts from 'echarts'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: "Home",
  setup() {
    const barChart = ref(null)
    function initChart() {
      const chart = echarts.init(barChart.value, 'macarons')

      chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
        }]
      })
    }

    onMounted(() => {
      initChart()
    })
        
    return {
      barChart
    }
  }
})
</script>

<style lang="scss" scope>
  .home {
    height: 100%;
    img {
      width: 100%;
      height: calc(100vh - 108px);
      object-fit: fill
    }
  }
</style>