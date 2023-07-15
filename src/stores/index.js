import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'x-api-key': import.meta.env.VITE_SECRET_KEY }
})
export default api

export const useDogDataStore = defineStore('dogData', () => {
  let dataList = ref([])
  const filteredList = ref([])
  const fetchingData = ref(true)

  async function getData() {
    fetchingData.value = true
    try {
      const response = await api.get('/images/search?&order=ASC&limit=100')
      dataList.value = response.data
      console.log(dataList.value)
    } catch (error) {
      console.error(error)
    } finally {
      fetchingData.value = false
    }
  }
  return { getData, dataList, fetchingData, filteredList }
})
