import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins:[createPersistedState()]
})
