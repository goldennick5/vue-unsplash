<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePhotosStore } from '../stores/Photos'
import UserProfile from '../components/atoms/UserProfile.vue'
import LikeButton from '../components/atoms/LikeButton.vue'
import DownloadButton from '../components/atoms/DownloadButton.vue'

const photoStore = usePhotosStore()
const route = useRoute()

const photoId = route.params.photoId
const photo = ref(null)

onMounted(async () => {
  try {
    photo.value = await photoStore.getSpecificPhoto(photoId)
  } catch (error) {
    console.error('Error fetching photo data:', error)
  }
})
</script>

<template>
  <div>
    <div v-if="photo" class="about-photo container" :style="{ backgroundImage: `url(${photo.urls.full})`}">
      <div class="gray-overlay"></div>
      <div class="about-photo__content">
        <UserProfile :photo="photo"/>
        <div class="about-photo__content-btns">
          <LikeButton/>
          <DownloadButton/>
        </div>
      </div>
      <img :src="photo.urls.regular" class="about-photo__image" :alt="photo.description">
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>

.about-photo {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}

.gray-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 27, 27, 0.5); 
  z-index: 0; 
}

.about-photo__content {
  display: flex;
  justify-content: space-between;
  padding: 2.875rem 0 2.5rem;
  position: relative; 
  z-index: 1; 
}
.about-photo__content-btns {
  display: flex;
  align-items: center;
}
.about-photo__image {
  width: 100%;
  height: 744px;
  object-fit: cover;
  position: relative; 
  z-index: 1; 
}
</style>
