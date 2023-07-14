<template>
  <TheHeader />
  <main>
    <loading-spinner v-if="fetchingData" />
    <ul class="image-wrapper" v-if="dataList.length > 0">
      <li v-for="(item, index) in dataList" :key="index">
        <img :src="item" alt="" class="dog-image" loading="lazy" />
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
  justify-content: center;
  margin: 0 auto;
  row-gap: 1.5rem;
  padding: 0 1rem;
  max-width: 1300px;
}

.dog-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media screen and (min-width: 760px) {
  .image-wrapper {
    column-gap: 2rem;
    grid-template-columns: 43.5% 43.5%;
  }
}

@media screen and (min-width: 1100px) {
  .image-wrapper {
    column-gap: 2rem;
    grid-template-columns: 31.5% 31.5% 31.5%;
  }
  .dog-image {
    height: 500px;
  }
}
</style>
