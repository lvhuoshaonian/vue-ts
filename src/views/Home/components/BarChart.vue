<template>
  <div style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts">
import { ChartOption } from '@/types'
import { defineComponent, reactive } from 'vue'
require('echarts/theme/macarons')
import { init, resize } from './index'
export default defineComponent({
  name: "Bar",
  setup() {
    const option = reactive<ChartOption>({
      title: {
        text: '柱形图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: 30,
        containLabel: true // grid区域是否包含坐标轴的刻度标签
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
      }]
    })
    init(option, 'macarons')
    resize()
    return {
    }
  }
})
</script>

<style lang="scss" scope>
</style>