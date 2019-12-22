<template>
  <div class="container">
    <div class="row row_jc-between row_ai-start">
      <FilterItems :items="Items" @assignFilteredItems="assignFilteredItems($event)"></FilterItems>
    </div>
    <div class="row row_jc-between row_ai-start">
      <Column :items="items" :state="'add'"></Column>
      <Column :items="UserItems" :state="'remove'"></Column>
    </div>
  </div>
</template>

<script>
import Column from '../components/Column'
import FilterItems from '../components/FilterItems'

export default {
  name: 'Home',
  data: () => ({
    items: []
  }),
  components: {
    Column, FilterItems
  },
  computed: {
    Items () {
      return this.items = this.$store.getters.getItems
    },
    UserItems () {
      return this.$store.getters.getUserItems
    }
  },
  methods: {
    assignFilteredItems (items) {
      this.items = items
    }
  }
}
</script>
