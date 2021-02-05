<template>
  <div class="sidebar beauty-scroll">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handleToRoute"
    >
      <SidebarItem 
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      />
    </a-menu>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  watchEffect
} from 'vue'
import {
  useRouter,
  useRoute,
  RouteLocationNormalizedLoaded
} from 'vue-router'
import { MenuItem, MenuKeys } from '@/types'
import Item from './item.vue'
import SidebarItem from './SidebarItem.vue'
import path from 'path'

export default defineComponent({
  name: 'Sidebar',
  props: {
    collapsed: Boolean
  },
  components: {
    Item,
    SidebarItem
  },
  setup() {
    const { options, push } = useRouter()
    const routes = options.routes
    const $route = useRoute()

    const menuKeys = reactive<MenuKeys>({
      selectedKeys: [],
      openKeys: []
    })

    const updateMenu = () => {
      menuKeys.selectedKeys = getKeys($route).selectedKeys
      menuKeys.openKeys = getKeys($route).openKeys
    }

    const getKeys = (route: RouteLocationNormalizedLoaded) => {
      const matchedRoutes = route.matched.filter(item => item.path !== '')
      const mapPath = matchedRoutes.map(item => item.path)
      const keys = mapPath.slice(0, mapPath.length -1)
      const len = route.matched[0].children.length
      return {
        selectedKeys: len > 1 ? Array(path.resolve(...mapPath)) : keys,
        openKeys: keys
      }
    }

    watchEffect(() => {
      updateMenu()
    })

    /**
     * 点击菜单跳转路由对应页面
     */
    const handleToRoute = (item: MenuItem) => {
      push(item.key)
    }

    return {
      ...toRefs(menuKeys),
      routes,
      handleToRoute,
    }
  }
})
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  // overflow: auto;
  overflow-y: overlay;
}
</style>