<template>
  <span class="anticon">
    <SvgIcon v-if="icon" :iconClass="icon" />
  </span>
  <span v-if="title">{{ title }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Item',
  props: {
    icon: String,
    title: String
  }
})
</script>

<style lang="scss" scope>

</style>