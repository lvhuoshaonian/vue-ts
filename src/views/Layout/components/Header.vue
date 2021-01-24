<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <SvgIcon 
        @click="toggleCollapsed"
        :iconClass="collapsed ? 'menu-unfold': 'menu-fold'"
        className="menu-fold"
      />
      <Breadcrumb />
    </div>
    <div class="layout-header-right">
      <!-- <a @click="outLogin">退出</a> -->
      <a-dropdown :trigger="['click']">
        <a class="avatar">
          <img src="../../../assets/miaomiao.gif" alt="">
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <router-link to="/" class="right-link">
                <SvgIcon iconClass="home" className="vertical-align"/>
                <span class="link-title">首页</span>
              </router-link>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <a @click="outLogin" class="right-link">
                <SvgIcon iconClass="logout" className="vertical-align"/>
                <span class="link-title">退出</span>
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { outLogin } from '@/utils/user'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
export default defineComponent({
  name: 'Header',
  components: {
    Breadcrumb
  },
  props: {
    collapsed: Boolean,
    toggleCollapsed: Function
  },
  setup() {
    return {
      outLogin
    }
  }
})
</script>

<style lang="scss" scope>
  .layout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 16px;

    .layout-header-left {
      display: flex;
      align-items: center;

      .breadcrumb {
        margin-left: 20px;
      }
    }

    .layout-header-right {
      .avatar {
        display: block;
        width: 44px;
        height: 44px;
        line-height: 4px;
        border-radius: 23px;
        overflow: hidden;

        img {
          width: 44px;
          height: 44px;
        }
      }
    }
  }

  .right-link {
    .link-title {
      padding-left: 8px;
    }
  }
</style>