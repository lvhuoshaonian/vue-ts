<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <Sidebar :collapsed="collapsed"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header
          :toggleCollapsed="toggleCollapsed"
          :collapsed="collapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <AppMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/views/Layout/components/Header.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from '@/views/Layout/components/AppMain.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Sidebar,
    AppMain
  },
  setup() {
    const collapsed = ref(false)
    const toggleCollapsed = () => {
      collapsed.value = ! collapsed.value
    }

    return {
      collapsed,
      toggleCollapsed
    }
  }
})
</script>

<style lang="scss">
  #components-layout-demo-custom-trigger {
    height: 100%;
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }

</style>