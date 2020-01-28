<template>
  <div class="login">
    <van-nav-bar title="注册/登录">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <ValidationObserver ref="form">
      <ValidationProvider name="手机号" rules="required|mobile" immediate>
        <van-field clearable v-model="user.mobile" placeholder="请输入用户名">
          <i class="icon icon-shouji" slot="left-icon"></i>
        </van-field>
      </ValidationProvider>
      <ValidationProvider name="验证码" rules="required|code">
        <van-field type="password" v-model="user.code" placeholder="请输入验证码">
          <i class="icon icon-mima" slot="left-icon"></i>
        </van-field>
      </ValidationProvider>
    </ValidationObserver>
    <div class="login-btn-box">
      <van-button @click="onLogin" type="info" class="login-btn">登录</van-button>
    </div>
  </div>
</template>

<script>
import { Login } from '@/api/user'
// import { validate } from 'vee-validate'
export default {
  name: 'Login',
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    // 登录
    async onLogin () {
      const success = await this.$refs.form.validate()
      if (!success) {
        const errors = this.$refs.form.errors
        console.log(errors)
        for (let key in errors) {
          const item = errors[key]
          if (item[0]) {
            this.$toast(item[0])
            return
          }
        }
      }
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      try {
        const { data } = await Login(this.user)
        console.log(data)

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
