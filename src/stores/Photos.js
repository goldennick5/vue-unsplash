import { ref, computed, nextTick } from 'vue'
import { defineStore } from 'pinia'
import { API_BASE_URL, API_ACCESS_KEY, PHOTOS_PER_PAGE } from '../constants'
import axios from 'axios'

export const usePhotosStore = defineStore('photosStore', () => {
  const photos = ref([])
  const page = ref(1)
  const pending = ref(false)
  const loadingExtraPhotos = ref(false)
  const searchValue = ref('')

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
      const response = await get(`${API_BASE_URL}/search/photos?client_id=${API_ACCESS_KEY}&query=${keyWord}&page=${page.value}`)
      photos.value = response.data.results
    } catch (error) {
      console.log(error, 'Error in searching photos/photo')
    }
  }

  const loadMore = async() => {
    try {
      loadingExtraPhotos.value = true
      await nextTick()
      
      setTimeout(async () => {
        page.value++
        const response = await get(`${API_BASE_URL}/photos?client_id=${API_ACCESS_KEY}&query=${searchValue}&page=${page.value}&per_page=${PHOTOS_PER_PAGE}`)
        photos.value = [...photos.value, ...response.data];
        loadingExtraPhotos.value = false
      }, 2000)
    } catch (error) {
      console.log(error, 'Error in loading more photos')
      loadingExtraPhotos.value = false
    }
  }

  const getSpecificPhoto = async(id) => {
    try {
      const response = await get(`${API_BASE_URL}/photos/${id}?client_id=${API_ACCESS_KEY}`)
      return response.data
    } catch (error) {
      console.log(error, `Error in finding photo with id ${id}`)
    }
  }

  const downloadPhoto = async(id) => {
    try {
      const response = await get(`${API_BASE_URL}/photos/${id}/download?client_id=${API_ACCESS_KEY}`)
      return response.data
    } catch (error) {
      console.log(error, 'Error in downloading photo')
    }
  }
  
  return { 
    photos,
    pending,
    loadingExtraPhotos,
    searchValue,
    fetchRandomPhotos,
    searchPhoto,
    loadMore,
    getSpecificPhoto,
    downloadPhoto
  }
})
