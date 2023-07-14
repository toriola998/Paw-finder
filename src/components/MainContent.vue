<template>
  <loading-spinner v-if="fetchingData" />
  <div v-if="dataList.length > 0">
    <select-dropdown></select-dropdown>
    <ul class="image-wrapper">
      <li v-for="(item, index) in dataList" :key="index">
        <img :src="item" alt="" class="dog-image" loading="lazy" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

import LoadingSpinner from '../components/LoadingSpinner.vue'
import SelectDropdown from './SelectDropdown.vue'

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
  row-gap: 1.5rem;
  padding: 0 1rem;
}

.dog-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

@media screen and (min-width: 760px) {
  .image-wrapper {
    column-gap: 2rem;
    grid-template-columns: 48% 48%;
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
