import axios from 'axios'

export default ({
  state: {
    items: []
  },
  getters: {
    getItems: state => state.items
  },
  mutations: {
    setItems (state, items) {
      state.items = items
    },
    removeItem (state, id) {
      state.items.forEach((item, idx) => {
        if (item.id === id) {
          state.items.splice(idx, 1)
        }
      })
    },
    setItem (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    fetchItems (context) {
      axios.get('http://localhost:3000/items')
        .then(({data}) => {
          context.commit('setItems', data)
        })
        .catch(({response}) => {
          console.log(response)
        })
    },
    deleteItem (context, id) {
      context.commit('removeItem', id)
    },
    addItem (context, item) {
      context.commit('setItem', item)
    }
  }
})