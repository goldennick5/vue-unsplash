<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const favouriteImages = JSON.parse(localStorage.getItem('likedPhotos')) || []
const isEmpty = ref(false)

const uniqueFavouriteImages = ref(removeDuplicates(favouriteImages, 'id'))

function removeDuplicates(arr, prop) {
  return arr.filter((obj, index, self) => index === self.findIndex((o) => o[prop] === obj[prop]))
}

const removeAllPhotos = () => {
  localStorage.clear()
  uniqueFavouriteImages.value = []
}

if (!uniqueFavouriteImages.length) isEmpty.value = true
</script>

<template>
  <div>
    <div v-if="uniqueFavouriteImages.length" class="photo-card__container container">
      <div class="photo-card" v-for="photo in uniqueFavouriteImages" :key="photo.id">
        <RouterLink :to="{ name: 'about-photo', params: { photoId: photo.id } }">
          <div class="photo">
            <img :src="photo.url" :alt="photo" />
          </div>
        </RouterLink>
      </div>
    </div>
    <button v-if="uniqueFavouriteImages.length" class="clear-btn" @click="removeAllPhotos">Clear All</button>
  </div>
  <div v-if="!uniqueFavouriteImages.length" class="empty">Empty list</div>
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

.photo:hover {
  transition: all 0.2s ease;
  cursor: pointer;
  opacity: 0.8;
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

.empty {
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
  font-style: italic;
}

.clear-btn {
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  margin: auto;
  background-color: var(--light-color);
  border: 1px solid var(--black-color);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  margin-bottom: 2rem;
}

.clear-btn:hover {
  background-color: var(--red-color);
  box-shadow: 0px 15px 20px rgba(240, 76, 35, 0.4);
  color: var(--black-color);
  transform: translateY(-7px);
  border: 1px solid var(--light-color);
}
</style>
