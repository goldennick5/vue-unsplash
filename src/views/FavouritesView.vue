<script setup>
import FavouritesContainer from '../components/molecules/FavouritesContainer.vue'
</script>

<template>
  <div class="container">
    <h1 class="favourites__title">Избранное</h1>
    <FavouritesContainer />
  </div>
</template>

<style scoped>
.favourites__title {
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 5.875rem;
}
</style>
