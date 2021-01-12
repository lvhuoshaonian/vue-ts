<template>
  <div>
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'
export default defineComponent({
  name: 'Header',
  props: {
    collapsed: Boolean,
    toggleCollapsed: Function
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  }
})
</script>