<template>
  <div class="homePage">
    <van-nav-bar class="box">
      <div slot="left" class="logo"></div>
      <van-search slot="right" class="search" shape="round" disabled background="#3296fa" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="channel in channels" :key="channel.id" :title="channel.name">{{channel.name}}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannel } from '@/api/channel'
export default {
  name: 'Home',
  props: {},
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  computed: {},
  created () {
    this.loadUserChannel()
  },
  mounted () {},
  watch: {},
  methods: {
    // 获取用户频道列表

    async loadUserChannel () {
      try {
        const { data } = await getUserChannel()
        this.channels = data.data.channels
        console.log(this.channels)
      } catch (error) {
        console.log(error)
        this.$toast('获取频道数据失败')
      }
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.box {
  .search {
    width: 170px;
    height: 44px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .logo {
    width: 130px;
    height: 44px;
    background-image: url("~@/assets/logo-light.png");
    background-size: cover;
  }
}
</style>
