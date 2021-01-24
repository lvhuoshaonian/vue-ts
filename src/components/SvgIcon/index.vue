<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: String,
    className: String
  },
  setup(props) {

    // 添加的svg-icon图标的class名
    const svgClass = computed(() => {
      if(props.className) {
        return `svg-icon ${props.className}`
      } else {
        return 'svg-icon'
      }
    })

    // svgicon的图标名称
    const iconName = computed(() => `#icon-${props.iconClass}`)

    return {
      iconName,
      svgClass
    }
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;

  &.vertical-align {
    vertical-align: -0.15em;
  }

  &.menu-fold {
    font-size: 20px;

    &:hover{
      color: #1890ff;
      cursor: pointer;
    }
  }
}
</style>