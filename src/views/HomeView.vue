<template>
  <TheHeader />
  <main>
    <loading-spinner v-if="fetchingData" />
    <ul class="image-wrapper" v-if="dataList.length > 0">
      <li v-for="(item, index) in dataList" :key="index">
        <img :src="item" alt="" class="dog-image" />
      </li>
    </ul>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

import TheHeader from '../components/TheHeader.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

const store = useDogDataStore()
const { getData } = store
const { dataList } = storeToRefs(store)
const { fetchingData } = storeToRefs(store)

onMounted(() => {
  getData()
})
</script>

<style scoped>
.image-wrapper {
  display: grid;
  row-gap: 1.5rem;
  padding: 0 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
}
.dog-image {
  max-width: 100%;
}
</style>
