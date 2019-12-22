import Vue from 'vue'
import Vuex from 'vuex'
import Items from './modules/items'
import UserItems from './modules/userItems'
import HistoryItems from './modules/historyItems'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Items,
    UserItems,
    HistoryItems
  }
})
