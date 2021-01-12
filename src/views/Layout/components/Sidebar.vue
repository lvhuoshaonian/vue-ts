<template>
  <div>
     <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <!-- <MenuUnfoldOutlined /> -->
        <SvgIcon iconClass="qq" />
        <span>
          Option 1
        </span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><span>Navigation One</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'Sidebar',
  props: {
    collapsed: Boolean
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup() {

    const menuKeys = reactive({
      selectedKeys: [],
      openKeys: [],
    })

    return {
      ...toRefs(menuKeys)
    }
  }
})
</script>
<style lang="scss">
  i.collapsed {
    padding-left: 24px;
  }
</style>