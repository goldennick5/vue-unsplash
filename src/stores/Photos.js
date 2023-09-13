import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_BASE_URL, API_ACCESS_KEY, PHOTOS_PER_PAGE } from '../constants'
import axios from 'axios'

export const usePhotosStore = defineStore('photosStore', () => {
  const photos = ref([])
  const pending = ref(false)
  const page = ref(1)

  const { get } = axios

  const fetchRandomPhotos = async() => {
    try {
      pending.value = true
      const response = await get(`${API_BASE_URL}/photos?client_id=${API_ACCESS_KEY}&page=${page.value}&per_page=${PHOTOS_PER_PAGE}`)
      photos.value = response.data
    } catch (error) {
      console.log(error, 'Error in fetching photos')
    } finally {
      pending.value = false
    }
  }

  const searchPhoto = async(keyWord) => {
    try {
      const response = await get(`${API_BASE_URL}/search/photos?query=${keyWord}&client_id=${API_ACCESS_KEY}&page=${page.value}`)
      photos.value = response.data
    } catch (error) {
      console.log(error, 'Error in searching photos/photo')
    }
  }
  
  return { 
    photos,
    pending,
    fetchRandomPhotos,
    searchPhoto
  }
})
