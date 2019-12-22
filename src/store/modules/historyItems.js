export default ({
  state: {
    historyItems: []
  },
  getters: {
    getHistoryItems: state => state.historyItems
  },
  mutations: {
    setHistoryItem (state, item) {
      state.historyItems.push(item)
    }
  },
  actions: {
    addHistoryItem (context, item) {
      context.commit('setHistoryItem', item)
    }
  }
})