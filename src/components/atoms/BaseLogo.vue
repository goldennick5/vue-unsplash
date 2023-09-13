<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" title="Art Gallery Logo">
    <img src="/art-gallery-logo.svg" alt="Логотип Art Gallery San Francisco" class="logo" />
  </RouterLink>
</template>

<style scoped>
.logo {
  width: 7rem;
  height: 2.742rem;
}
</style>
