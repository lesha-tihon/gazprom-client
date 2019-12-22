<template>
  <div class="column__item">
    <div class="content">
      <span class="content__id content__id_indent">{{item.id}}</span>
      <span class="content__title content__title_indent">{{item.name}}</span>
      <span class="content__date content__date_indent" v-if="item.date" v-text="getFormatDate(item.date)"></span>
      <span class="content__state" v-if="item.state">{{item.state}}</span>
    </div>
    <button class="btn btn_add" v-if="state === 'add'" @click="addToUserItems(item.id, item.name), addToHistoryItems(item.id, item.name, state)">
      <img src="@/assets/icons/add.svg" alt="" class="btn__img">
    </button>
    <button class="btn btn_remove" v-else-if="state === 'remove'" @click="deleteFromUserItems(item.id, item.name), addToHistoryItems(item.id, item.name, state)">
      <img src="@/assets/icons/remove.svg" alt="" class="btn__img">
    </button>
  </div>
</template>

<script>
export default {
  name: 'ColumnItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    state: {
      type: String,
      default: ''
    }
  },
  methods: {
    addToUserItems (id, name) {
      const item = {
        id: id,
        name: name
      }

      this.$store.dispatch('loadUserItem', item)
      this.$store.dispatch('deleteItem', id)
    },
    deleteFromUserItems (id, name) {
      const item = {
        id: id,
        name: name
      }

      this.$store.dispatch('deleteUserItem', id)
      this.$store.dispatch('addItem', item)
    },
    addToHistoryItems (id, name, state) {
      const item = {
        id: id,
        name: name,
        state: state,
        date: new Date()
      }

      this.$store.dispatch('addHistoryItem', item)
    },
    setZero (value) {
      if (value.toString().length < 2) {
        return '0' + value  
      } else {
        return value
      }
    },
    getFormatDate (date) {
      const newDate = new Date(date)
      const day = newDate.getDate()
      const month = newDate.getMonth() + 1
      const year = newDate.getFullYear()
      const hours = this.setZero(newDate.getHours())
      const minutes = this.setZero(newDate.getMinutes())
      const seconds = this.setZero(newDate.getSeconds())
      return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds
    }
  }
}
</script>

<style lang="scss" scoped>
  .column__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid var(--column-item-border);
    &:last-child {
      border-bottom-color: transparent; 
    }
  }

  .content {
    display: flex;
    align-items: center;
    &__id {
      display: block;
      width: 30px;
      font-size: 1.1rem;
      &_indent {
        margin: 0 20px 0 0;
      }
    }
    &__title {
      display: block;
      width: 80px;
      font-size: 1.1rem;
      &_indent {
        margin: 0 20px 0 0;
      }
    }
    &__date {
      display: block;
      width: 160px;
      font-size: 1.1rem;
      &_indent {
        margin: 0 20px 0 0;
      }
    }
    &__state {
      display: block;
      width: 60px;
      font-size: 1.1rem;
      &_indent {
        margin: 0 20px 0 0;
      }
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-color: transparent;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    &_add {
      background-color: var(--add-btn);
    }
    &_remove {
      background-color: var(--remove-btn);
    }
  }
</style>
