<script setup>
import { onMounted } from 'vue'
import TheSearchSection from '../components/molecules/TheSearchSection.vue'
import { usePhotosStore } from '../stores/Photos'

const { photos, fetchRandomPhotos, pending } = usePhotosStore()

if (!photos.length && !pending) {
  fetchRandomPhotos()
}
</script>

<template>
  <Suspense>
    <template v-if="pending">Loading photos...</template>

    <template v-else>
      <TheSearchSection />

      <div v-for="photo in photos" :key="photo.id">
        <!-- <img :src="photo.urls.regular" :alt="photo.description" /> -->
        <span>{{ photo.slug }}</span>
      </div>
    </template>
  </Suspense>
</template>

<style scoped></style>
