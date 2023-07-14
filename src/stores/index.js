import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDogDataStore = defineStore('dogData', () => {
  let dataList = ref([])
  const fetchingData = ref(true)

  function getData() {
    fetchingData.value = true
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then((res) => {
        if (res.status === 200) {
          return res.json() // Return the promise
        } else {
          console.log('Something went wrong')
        }
      })
      .then((data) => {
        dataList.value = data.message
        console.log(data, dataList.value)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        fetchingData.value = false
      })
  }

  return { getData, dataList, fetchingData }
})
