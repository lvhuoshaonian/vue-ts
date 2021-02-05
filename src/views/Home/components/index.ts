import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, onUnmounted } from 'vue'
import { debounce } from '@/utils/index'
import echarts from 'echarts'
import { ChartOption } from '@/types'

/**
 * 初始化数据图形
 * @param option
 * @param theme
 */
export function init(option: ChartOption, theme?: string) {
  const { ctx } = getCurrentInstance() as any
  const initChart = () => {
    ctx.chart = echarts.init(ctx.$el, theme ? theme : '')
    ctx.chart.setOption(option)
  }

  onMounted(() => {
    nextTick(() => {
      setTimeout(() => {
        initChart()
      })
    })
  })

  onBeforeUnmount(() => {
    if (!ctx.chart) {
      return
    }
    ctx.chart.dispose()
    ctx.chart = null
  })
}

/**
 * 图形自适应
 */
export function resize() {
  const { ctx } = getCurrentInstance() as any
  const $_resizeHandler = debounce(() => {
    if (ctx.chart) {
      ctx.chart.resize()
    }
  }, 100, ctx)

  const $_initResizeEvent = () => {
    window.addEventListener('resize', $_resizeHandler)
  }

  const $_destroyResizeEvent = () => {
    window.removeEventListener('resize', $_resizeHandler)
  }

  onMounted(() => {
    $_initResizeEvent()
  })

  onUnmounted(() => {
    $_destroyResizeEvent()
  })
}
