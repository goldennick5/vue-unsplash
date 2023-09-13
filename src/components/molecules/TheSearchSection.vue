<script setup>
import { ref } from 'vue'
import { usePhotosStore } from '../../stores/Photos'
import BaseInput from '../atoms/BaseInput.vue'

const photosStore = usePhotosStore()
const searchValue = ref('')

const search = async () => {
  if (searchValue.value.trim() === '') {
    return
  }

  photosStore.searchPhoto(searchValue.value)
}
</script>

<template>
  <section class="search-section">
    <div class="search-section__input-wrapper">
      <BaseInput
        :id="search"
        v-model="searchValue"
        :value="searchValue"
        placeholder="Поиск"
        @input="search"
      />
      <img src="icons/icon-search-black.svg" alt="Иконка поиска" />
    </div>
  </section>
</template>

<style scoped>
.search-section {
  background: url('search-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  height: 16.25rem;
  padding: 0 1rem;
}

.search-section__input-wrapper {
  display: flex;
  width: 54.125rem;
  padding: 1.313rem 2.438rem;
  margin: auto;

  background-color: var(--light-color);
}
</style>
