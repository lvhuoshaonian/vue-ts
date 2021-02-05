<template>
  <div class="app-main">
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppMain'
})
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  margin-bottom: 20px;
  // background-color: #fff;
}
</style>