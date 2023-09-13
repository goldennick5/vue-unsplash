<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__menu-link">
        <RouterLink to="/">
          <img src="icons/icon-search.svg" alt="Иконка поиска" />
          <span>Поиск</span>
        </RouterLink>
      </li>
      <li class="nav__menu-link">
        <RouterLink to="/favourites">
          <img src="icons/icon-favourites.svg" alt="Иконка сердца" />
          <span>Избранное</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav__menu {
  display: flex;
}

.nav__menu-link a{
  display: flex;
  align-items: center;
}

.nav__menu-link span {
  color: var(--light-color);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-left: 0.75rem;
}

.nav__menu-link:not(:last-of-type) {
  margin-right: 2.375rem;
}
</style>
