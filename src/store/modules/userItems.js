export default ({
  state: {
    userItems: []
  },
  getters: {
    getUserItems: state => state.userItems
  },
  mutations: {
    setUserItem (state, item) {
      state.userItems.push(item)
    },
    removeUserItem (state, id) {
      state.userItems.forEach((userItem, idx) => {
        if (userItem.id === id) {
          state.userItems.splice(idx, 1)
        }
      })
    }
  },
  actions: {
    loadUserItem (context, item) {
      context.commit('setUserItem', item)
    },
    deleteUserItem (context, id) {
      context.commit('removeUserItem', id)
    }
  }
})