<template>
  <a-breadcrumb class="app-breadcrumb" separator="/">
    <template v-for="(item, index) in breadcrumbs">
      <a-breadcrumb-item v-if="item.meta.title" :key="item.name" class="breadcrumb-anim">
        <span
          v-if="
            item.redirect === 'noredirect' || index === breadcrumbs.length - 1
          "
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect || item.path">
          {{ item.meta.title }}
        </router-link>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue"
import { RouteLocationMatched, useRoute } from 'vue-router'
export default defineComponent({
  name: "Breadcrumb",
  setup() {
    const breadcrumbs = ref<RouteLocationMatched[]>()
    const route = useRoute()
    
    const getBreadcrumb = () => {
      let matched = route.matched.filter(item => item.meta.title)
      if(matched.length > 0) {
        const matchedItem: object = {
          path: '/',
          meta: {
            title: '管理平台'
          }
        }
        matched = [matchedItem as RouteLocationMatched].concat(matched)
      }

       breadcrumbs.value = matched
    }

    watchEffect(() => {
      getBreadcrumb()
    })
    
    return {
      breadcrumbs
    }
  }
})
</script>

<style lang="scss">
.app-breadcrumb.ant-breadcrumb {
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
}
</style>