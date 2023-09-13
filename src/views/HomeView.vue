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
    <div class="loading" v-if="photosStore.pending">Loading photos...</div>

    <template v-else>
      <TheSearchSection />
      <CardsContainer :photos="photosStore.photos" />
      <div class="load-more__container">
        <img v-if="photosStore.loadingExtraPhotos" src="icons/icon-loading.svg" class="load-more__loading" alt="Иконка загрузки">
        <button v-if="!photosStore.loadingExtraPhotos" @click.prevent="photosStore.loadMore" class="load-more__btn">Еще</button>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: var(--black-color);
}

.load-more__container {
  display: flex;
  margin-bottom: 2rem;
}

.load-more__btn {
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  margin: auto;
  background-color: var(--light-color);
  border: 1px solid var(--black-color);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}


.load-more__btn:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
  border: 1px solid var(--light-color);
}

.load-more__loading {
  margin: 0 auto;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
