<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  mounted () {
    this.$store.dispatch('fetchItems')
  }
}
</script>

<style lang="scss">
  :root {
    --bg-header: #4db6ac;
    --menu-link-bg: #00796b;
    --text-primary: #000000;
    --text-white: #ffffff;
    --column-item-border: #a0a0a0;
    --add-btn: #26a69a;
    --remove-btn: #f44336;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: var(--text-primary);
    font-size: 1rem;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .row {
    width: 100%;
    display: flex;
    &_jc-center {
      justify-content: center;
    }
    &_jc-between {
      justify-content: space-between;
    }
    &_ai-start {
      align-items: flex-start;
    }
  }
</style>
