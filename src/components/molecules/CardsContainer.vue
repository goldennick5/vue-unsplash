<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  photos: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="photo-card__container container">
    <div class="photo-card" v-for="photo in photos" :key="photo.id">
      <div class="photo">
        <img :src="photo.urls.regular" :alt="photo.description" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.photo-card__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  margin: 7.125rem 0 2rem;
}

.photo-card {
  width: 100%;
  padding: 0;
}

.photo {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.photo img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>
