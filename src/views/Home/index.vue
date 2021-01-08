<template>
  <div>
    home
    <a-button @click="onReturn">返回</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue"
import { useRouter, useRoute } from 'vue-router'
import router from '@/router'
export default defineComponent({
  name: "Home",
  setup() {
    // const { ctx } = getCurrentInstance() as any
    // const router = useRouter()
    console.log(useRoute().params.name)
    function onReturn() {
      // ctx.$router.go(-1)
      router.go(-1)
    }

    return {
      onReturn
    }
  }
})
</script>

<style>

</style>