<template>
  <div class="column column_indent">
    <ColumnItem 
      v-for="(item, idx) in items"
      :key="idx"
      :item="item"
      :state='state'
    >
    </ColumnItem>
  </div>
</template>

<script>
import ColumnItem from './ColumnItem'

export default {
  name: 'Column',
  components: {
    ColumnItem
  },
  props: {
    items: {
      type: Array,
      default: () => {}
    },
    state: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .column {
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    &_indent {
      margin: 30px 0;
    }
  }
</style>
