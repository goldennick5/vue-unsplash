<script setup>
import BaseLogo from '../atoms/BaseLogo.vue';
import TheNavbar from '../molecules/TheNavbar.vue';
</script>

<template>
  <header class="header container">
    <BaseLogo/>

    <TheNavbar/>    
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.063rem;

  background-color: var(--black-color);
}
</style>