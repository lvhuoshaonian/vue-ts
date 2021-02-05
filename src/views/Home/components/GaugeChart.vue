<template>
  <div style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts">
import { ChartOption } from '@/types'
import { defineComponent,  reactive } from 'vue'
import { init, resize } from './index'
require('echarts/theme/macarons')
export default defineComponent({
  name:'Gauge',
  setup() {
    const option = reactive<ChartOption>({
      title: {
        text: '进度仪表盘'
      },
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 240,
          splitNumber: 12,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
        progress: {
          show: true,
          roundCap: true,
          width: 18
        },
        // 表针参数调整
        pointer: {
          icon: '',
          length: '81%',
          width: 5,
          offsetCenter: [0, '5%']
        },
        // 读条的宽度
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          splitNumber: 2,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          length: 12,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        // 参数大小及间距调整
        axisLabel: {
          distance: 14,
          color: '#999',
          fontSize: 14
        },
        title: {
          show: true
        },
        detail: {
          backgroundColor: '#fff',
          borderColor: '#999',
          borderWidth: 1,
          width: '60%',
          lineHeight: 36,
          height: 30,
          borderRadius: 8,
          offsetCenter: [0, '35%'],
          valueAnimation: true,
          formatter: function (value: any) {
            return '{value|' + value.toFixed(0) + '}{unit|km/h}';
          },
          rich: {
            value: {
              fontSize: 25,
              fontWeight: 'bolder',
              color: '#777'
            },
            unit: {
              fontSize: 15,
              color: '#999',
              padding: [0, 0, 0, 10]
            }
          }
          },
        data: [{
          value: 100
        }]
      }]
    })
    init(option, 'macarons')
    resize()
    return {}
  }
})
</script>

<style>

</style>