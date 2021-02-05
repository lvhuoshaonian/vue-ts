<template>
  <div class="login">
    <div class="bg-img">
      <img src="../../assets/bg.jpg" alt="">
    </div>
    <div class="login-form">
      <h2 class="login-title">管理系统</h2>
      <a-form
        :model="form"
        :rules="rules"
        :wrapper-col="wrapperCol"
        class="login-info"
        @finish="onLogin"
        @submit.prevent
      >
        <a-form-item
          label="用户名"
          class="username"
          name="username"
          required
        >
          <a-input
            v-model:value="form.username"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <UserOutlined style="color:rgba(0,0,0,.25)"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          class="password"
          name="password"
        >
          <a-input-password
            v-model:value="form.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <LockOutlined style="color:rgba(0,0,0,.25)"/>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item class="login-btn">
          <a-button
            html-type="submit"
            type="primary"
            block
          >
            登陆
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  getCurrentInstance
} from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { UserInfo, RulesUserInfo, RulesType } from '@/types'
import { setToken } from '@/utils/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const { push } = useRouter()
    const form = reactive<UserInfo>({
      username: '',
      password: ''
    })

    // 密码输入验证
    const checkAge = async (rule: RulesType, value: string, callback: () => void) => {
      if (value.length < 6) {
        return Promise.reject('长度不能小于6')
      } else if(value.length > 20) {
        return Promise.reject('长度不能超过20')
      } else {
        return Promise.resolve()
      }
    }

    // 表单验证规则
    const rules = reactive<RulesUserInfo>({
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          validator: checkAge,
          trigger: 'blur'
        }
      ]
    })

    function onLogin() {
      if (form.username ==='admin' && form.password === '123456') {
        push('/')
        setToken('admin')
      }
    }

    return {
      form,
      rules,
      onLogin,
      wrapperCol: { span: 24 }
    }
  }
})
</script>
<style  lang="scss" scope>
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .bg-img {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .login-form {
      width: 450px;
      margin-top: -150px;
      padding: 15px 15px 30px;
      background-color: rgba($color: #D5EAFE, $alpha: .7);
      border-radius: 6px;
      box-shadow: 0 0 3px #ccc;
      border: 1px solid #ccc;

      .login-title {
        font-weight: 700;
        text-align: center;
        color: #6a6a6a;
        letter-spacing: 5px;
      }

      .login-info {
        .ant-form-item-label {
          line-height: 19px;
        }

        // .username {
        //   margin-bottom: 0;
        //   .ant-form-item-control {
        //     height: 66px;
        //   }
        // }

        .username,
        .password {
          label {
            color:#6a6a6a;
          }
          input {
            height: 32px;
            font-size: 14px;
          }
        }

        .login-btn {
          button {
            height: 42px;
          }
        }
      }
    }
  }
</style>
