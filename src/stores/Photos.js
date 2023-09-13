import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API_BASE_URL, API_ACCESS_KEY } from '../constants'
import axios from 'axios'

export const usePhotosStore = defineStore('photosStore', () => {
  const photos = ref([])
  const pending = ref(false)

  const { get } = axios

  const fetchRandomPhotos = async() => {
    try {
      pending.value = true
      const response = await get(`${API_BASE_URL}/photos?client_id=${API_ACCESS_KEY}`)
      photos.value = response.data
    } catch (error) {
      console.log(error, 'Error in fetching photos')
    } finally {
      pending.value = false
    }
  }
  
  return { 
    photos,
    fetchRandomPhotos
  }
})
