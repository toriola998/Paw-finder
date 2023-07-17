import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useLocalStorage } from '@vueuse/core'
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'x-api-key': import.meta.env.VITE_SECRET_KEY }
})
export default api

export const useDogDataStore = defineStore('dogData', () => {
  let dataList = ref(useLocalStorage('dataList', []))
  let breedList = ref(useLocalStorage('breedList', []))
  let duplicateDataList = ref(useLocalStorage('duplicateDataList', []))

  const fetchingData = ref(true)
  const errorNote = ref('')

  async function getData() {
    fetchingData.value = true
    try {
      const response = await api.get('/images/search?&order=ASC&limit=100')
      dataList.value = response.data
      duplicateDataList.value = response.data
      console.log(dataList.value)
    } catch (error) {
      console.error(error)
      errorNote.value = 'Oops! Something seems wrong, reload or try again.'
    } finally {
      fetchingData.value = false
    }
  }
  return { getData, dataList, fetchingData, breedList, errorNote, duplicateDataList }
})
