<template>
  <div style="width: 100%;height: 400px;"></div>
</template>

<script lang="ts">
import { ChartOption } from '@/types'
import { defineComponent, reactive } from 'vue'
import { init, resize } from './index'
export default defineComponent({
  name: 'Radar',
  setup() {
    const option = reactive<ChartOption>({
      title: {
        text: '基础雷达图'
      },
      tooltip: {},
      legend: {
        data: ['预算分配', '实际开销'],
        top: 'bottom'
      },
      radar: {
          // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '销售', max: 650},
          { name: '管理', max: 1600},
          { name: '信息技术', max: 3000},
          { name: '客服', max: 3800},
          { name: '研发', max: 5200},
          { name: '市场', max: 2500}
        ],
        radius: 130 // 调整图形大小
      },
      series: [{
        name: '预算 vs 开销',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [430, 1000, 2800, 3500, 5000, 1900],
            name: '预算分配'
          },
          {
            value: [500, 1400, 2800, 3100, 4200, 2100],
            name: '实际开销'
          }
      ]}]
    })
    init(option)
    resize()
    return {
    }
  }
})
</script>
<style lang="scss" scope>
  
</style>