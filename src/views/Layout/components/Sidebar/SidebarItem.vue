<template>
  <template v-if="item.meta && !item.meta.hidden && item.children">
    <a-menu-item v-if="hasOneShowingChild(item.children, item)"
    >
      <Item
        v-if="onlyOneChild && onlyOneChild.meta"
        :icon="onlyOneChild.meta.icon"
        :title="onlyOneChild.meta.title"
      />
    </a-menu-item>
    <a-sub-menu v-else>
      <template #title>
        <Item
          v-if="item.meta"
          :icon="item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <template v-for="child in item.children">
        <template v-if="child.meta && !child.meta.hidden">
          <SidebarItem
            v-if="child.children && child.children.length > 0"
            :item="child"
            :key="keyPath(child.path)"
            :basePath="keyPath(child.path)"
          />
          <a-menu-item
            v-else
            :key="keyPath(child.path)"
          >
            <Item
              v-if="child.meta"
              :icon="child.meta.icon"
              :title="child.meta.title"
            />
          </a-menu-item>
        </template>
      </template>
    </a-sub-menu>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import path from 'path'
import Item from './item.vue'
export default defineComponent({
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  setup(props) {

    const onlyOneChild = ref<any>()
    /**
     * 当只有一个子路由时，默认情况下会显示该子路由为一级菜单
     */
    const hasOneShowingChild = (children: RouteRecordRaw[], parent: RouteRecordRaw) => {
       const showingChildren = children.filter((item: RouteRecordRaw)  => {
        if (item.meta && item.meta.hidden) {
          return false
        } else {
          // 临时设置（只有一个显示子级时使用）
          onlyOneChild.value = item
          return true
        }
      })

      // 当只有一个子路由器时，默认情况下会显示该子路由器
      if (showingChildren.length === 1) {
        return true
      }

      return false
    }

    const keyPath = (childPath: string) => {
      return path.resolve(props.basePath, childPath)
    }

    return {
      hasOneShowingChild,
      onlyOneChild,
      keyPath
    }
  }
})
</script>

<style>

</style>