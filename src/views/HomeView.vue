<script setup>
import TheSearchSection from '../components/molecules/TheSearchSection.vue'
import { usePhotosStore } from '../stores/Photos'

const photosStore = usePhotosStore()

if (!photosStore.photos.length && !photosStore.pending) {
  photosStore.fetchRandomPhotos()
}
</script>

<template>
  <Suspense>
    <template v-if="pending">Loading photos...</template>

    <template v-else>
      <TheSearchSection />

      <div v-for="photo in photosStore.photos" :key="photo.id">
        <!-- <img :src="photo.urls.regular" :alt="photo.description" /> -->
        <span>{{ photo.slug }}</span>
      </div>
    </template>
  </Suspense>
</template>

<style scoped></style>
