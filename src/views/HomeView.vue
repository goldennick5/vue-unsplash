<script setup>
import TheSearchSection from '../components/molecules/TheSearchSection.vue'
import CardsContainer from '../components/molecules/CardsContainer.vue'
import { usePhotosStore } from '../stores/Photos'

const photosStore = usePhotosStore()
if (!photosStore.photos.length && !photosStore.pending) {
  photosStore.fetchRandomPhotos()
}
</script>

<template>
  <Suspense>
    <template v-if="photosStore.pending">Loading photos...</template>

    <template v-else>
      <TheSearchSection />
      <CardsContainer :photos="photosStore.photos" />
    </template>
  </Suspense>
</template>

<style scoped></style>
