<template>
  <div class="login">
    <van-nav-bar title="注册/登录">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <van-cell-group>
      <van-field label="手机号" placeholder="请输入用户名"></van-field>
      <van-field label="验证码" placeholder="请输入验证码"></van-field>
    </van-cell-group>
    <div class="login-btn-box">
        <van-button type="info" class="login-btn">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="less">
.login{
.login-btn-box{
    padding: 20px;
    .login-btn{
        width: 100%;
    }
}
}
</style>
