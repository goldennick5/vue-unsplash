<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" title="Art Gallery Logo">
    <img
      alt="Логотип Art Gallery San Francisco"
      class="logo"
      src="/art-gallery-logo.svg"
    />
  </RouterLink>
</template>

<style scoped>
.logo {
  width: 7rem;
  height: 2.742rem;
}
</style>