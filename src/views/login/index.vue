<template>
  <div class="login">
    <van-nav-bar title="注册/登录">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <van-cell-group>
      <van-field clearable v-model="user.mobile" label="手机号" placeholder="请输入用户名"></van-field>
      <van-field type="password" v-model="user.code" label="验证码" placeholder="请输入验证码"></van-field>
    </van-cell-group>
    <div class="login-btn-box">
      <van-button @click="onLogin" type="info" class="login-btn">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Login } from '@/api/user'
export default {
  name: 'Login',
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    async onLogin () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        await Login(this.user)
        console.log('登陆成功')
        this.$toast.success('登录成功')
      } catch (error) {
        console.log('登录失败', error)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.login {
  .login-btn-box {
    padding: 20px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
