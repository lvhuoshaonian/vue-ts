<template>
  <div>
     <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handleToRoute"
      @openChange="openSubMenu"
    >
      <template v-for="item in routes">
        <template v-if="item.meta && !item.meta.hidden && item.children">
          <a-menu-item v-if="hasOneShowingChild(item.children)" :key="item.path">
            <Item
              v-if="onlyOneChild(item).meta"
              :icon="onlyOneChild(item).meta.icon"
              :title="onlyOneChild(item).meta.title"
            />
          </a-menu-item>
          <a-sub-menu v-else :key="item.path">
            <template #title>
              <Item
                v-if="item.meta"
                :icon="item.meta.icon"
                :title="item.meta.title"
              />
            </template>
            <a-menu-item v-for="child in item.children" :key="child.path">
              <Item
                v-if="child.meta"
                :icon="child.meta.icon"
                :title="child.meta.title"
              />
            </a-menu-item>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { MenuItem } from '@/types'
import { localSave, localGet } from '@/utils'
import path from 'path'
import Item from './item.vue'

export default defineComponent({
  name: 'Sidebar',
  props: {
    collapsed: Boolean
  },
  components: {
    Item
  },
  setup() {
    const { options, push } = useRouter()
    const routes = options.routes

    const menuKeys = reactive({
      selectedKeys: localGet('selectedKeys', true),
      openKeys: localGet('openKeys', true),
    })
    
    /**
     * 判断为一级菜单
     */
    const hasOneShowingChild = (children: RouteRecordRaw[]) => {
      const showingChildren = children.filter(item => {
        if (item.meta && item.meta.hidden) {
          return false
        } else {
          return true
        }
      })

      // 当只有一个子路由时，默认情况下会显示该子路由为一级菜单
      if (showingChildren.length === 1) {
        return true
      }
      
      return false
    }

    /**
     * 当只有一个子路由记录临时值
     */
    const onlyOneChild = (item: RouteRecordRaw) => {
      return item.children && item.children[0]
    }

    /**
     * 点击菜单跳转路由对应页面
     */
    const handleToRoute = (item: MenuItem) => {
      const routePath = resolvePath(item.keyPath)
      push(routePath)
      localSave('selectedKeys', [item.key])
    }

    /**
     * SubMenu展开/关闭的回调
     */
    const openSubMenu = (openKeys: string[]) => {
      localSave('openKeys', openKeys)
    }

    /**
     * 获取路由路径
     */
    const resolvePath = (keyPath: string[]): string => {
      if (keyPath.length > 0) {
        return path.resolve(...keyPath.reverse())
      }
      return ''
    }

    return {
      ...toRefs(menuKeys),
      routes,
      hasOneShowingChild,
      onlyOneChild,
      handleToRoute,
      openSubMenu
    }
  }
})
</script>
<style lang="scss">
  i.collapsed {
    padding-left: 24px;
  }
</style>