<template>
  <div class="container">
    <div class="row row_jc-center row_ai-start">
      <Column :items="HistoryItems"></Column>
    </div>
  </div>
</template>

<script>
import Column from '../components/Column'

export default {
  name: 'Home',
  components: {
    Column
  },
  computed: {
    HistoryItems () {
      if (!this.$route.params.state) {
        return this.$store.getters.getHistoryItems
      } else {
        return this.sortByState(this.$store.getters.getHistoryItems, this.$route.params.state)
      }
    }
  },
  methods: {
    sortByState (items, state) {
      let stateHistoryItems = []

      items.forEach(item => {
        if (item.state === state) {
          stateHistoryItems.push(item)
        }
      })

      return stateHistoryItems
    }
  }
}
</script>
