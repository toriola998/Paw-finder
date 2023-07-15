<template>
  <Navbar backgroundColor="black" />
  <main></main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { computed } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useDogDataStore()
const { dataList } = storeToRefs(store)

const dogID = computed(() => {
  return route.params.id
})

const dog = computed(() => {
  if (dataList) {
    return dataList.value.find((item) => {
      console.log(item)
      return item.id == dogID
    })
  }
  return undefined
})
console.log(dog)
</script>
