<template>
  <header class="header">
    <ul class="menu">
      <li 
        class="menu__item"
        v-for="(menuItem, idx) in menuItems"
        :key="idx" 
      >
        <router-link 
          :to="menuItem.url" 
          exact 
          class="menu__link"
          active-class="menu__link_active"
        >
          {{menuItem.title}}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    menuItems: [
      { title: 'Home', url: '/' },
      { title: 'History', url: '/history' },
      { title: 'History Add', url: '/history/add' },
      { title: 'History Remove', url: '/history/remove' },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--bg-header);
  }

  .menu {
    display: flex;
    align-items: center;
    &__item {
      margin: 0 10px;
      list-style: none;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &__link {
      display: inline-block;
      padding: 10px;
      text-decoration: none;
      color: var(--text-white);
      font-size: 1.2rem;
      &_active {
        background-color: var(--menu-link-bg);
      }
      &:hover {
        background-color: var(--menu-link-bg);
      }
    }
  }
</style>