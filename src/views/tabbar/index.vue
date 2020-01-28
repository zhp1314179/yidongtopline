<template>
  <div>
    <!-- 子路由 -->
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/qa" icon="comment-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">未登录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {},
  data () {
    return {
      active: 1
    }
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
</style>
