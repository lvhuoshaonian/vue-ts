<template>
  <div class="grid">
    <div v-for="item of svgIcons" :key="item" class="">
      <a-tooltip placement="top">
        <template #title>
          <span>{{ generateIconCode(item) }}</span>
        </template>
        <div class="icon-item">
          <SvgIcon :iconClass="item" className="iconFont-30"/>
          <span>{{ item }}</span>
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import svgIcons from '@/views/Icons/icon'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icons',
  setup() {

    const generateIconCode = (symbol : string) => {
      return `<SvgIcon :iconClass="${symbol}" />`
    }

    return {
      svgIcons,
      generateIconCode
    }  
  }
})
</script>

<style lang="scss" scope>
  .grid {
    margin-top: 20px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    //表示列宽不小于120px，不大于1fr
    background-color: #fff;

    .icon-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 110px;
      height: 86px;
      margin: 20px;
      float: left;
      color: #24292e;
      font-size: 30px;
      
      >span {
        display: inline-block;
        font-size: 16px;
        margin: 8px;
      }
    }
  }

  .iconFont-30 {
    pointer-events: none; //
  }
</style>