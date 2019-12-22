<template>
  <div class="filter filter_indent">
    <input type="text" class="filter__input" @input="onInputChange()" v-model="filterValue">
  </div>
</template>

<script>
export default {
  name: 'FilterItems',
  data: () => ({
    filterValue: ''
  }),
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  },
  watch: {
    items: {
      deep: true,
      handler () {
        this.onInputChange()
      }
    }
  },
  methods: {
    onInputChange () {
      this.$emit('assignFilteredItems', this.itemsFiltering())
    },
    itemsFiltering () {
      if (this.filterValue === '') {
        return this.items
      } else {
        let filteredItems = []

        this.items.forEach(item => {
          if (item.name.indexOf(this.filterValue) !== -1) {
            filteredItems.push(item)
          }
        })

        return this.sortFilteredItems(filteredItems)
      }
    },
    sortFilteredItems (items) {
      items.sort((a, b) => {
        if (this.getCountItem(a) > this.getCountItem(b)) {
          return -1
        }

        if (this.getCountItem(a) < this.getCountItem(b)) {
          return 1
        }

        return 0
      })

      return items
    },
    getCountItem (item) {
      let count = 0
      let pos = item.name.indexOf(this.filterValue)

      while (pos !== -1) {
        count++
        pos = item.name.indexOf(this.filterValue, pos + 1)
      }

      return count
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter {
    width: 100%;
    &__input {
      width: 100%;
      max-width: 500px;
      padding: 10px;
      border-color: transparent;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      outline: 0;
    }
    &_indent {
      margin: 30px 0 0 0;
    }
  }

  @media screen and (max-width: 1059px) {
    .filter {
      display: flex;
      justify-content: center;
    }
  }
</style>
