<template>
  <div id="components-grid-demo-playground" class="home">
    <a-row :gutter="[16,16]">
      <a-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <RadarChart />
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :lg="12"> 
        <div class="chart-wrapper">
          <PieChart />
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :lg="12"> 
        <div class="chart-wrapper">
          <BarChart />
        </div>
      </a-col>
      <a-col :xs="24" :sm="24" :lg="12"> 
        <div class="chart-wrapper">
          <GaugeChart />
        </div>
      </a-col>
      <a-col :span="24">
        <div class="chart-wrapper">
          <LineChart />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'
import RadarChart from './components/RadarChart.vue'
import PieChart from './components/PieChart.vue'
import GaugeChart from './components/GaugeChart.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Home",
  components: {
    BarChart,
    LineChart,
    RadarChart,
    PieChart,
    GaugeChart
  },
  setup() {
        
    return {
    }
  }
})
</script>

<style lang="scss" scope>
  #components-grid-demo-playground {
    [class~='ant-col'] {
      border: 0;

      > div {
        margin: 0 auto;
        padding: 8px 16px;
        background-color: #fff;
        font-size: 13px;
      }
    }
    // .chart-wrapper {
    //   background-color: #fff;
    //   padding: 16px;

    // }
  }
</style>