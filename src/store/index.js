import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import decodeJwt from 'jwt-decode'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('USER_KEY')
  },
  mutations: {
    setUser (state, data) {
      if (data && data.token) {
        data.id = decodeJwt(data.token).user_id
      }
      state.user = data
      setItem('USER_KEY', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
