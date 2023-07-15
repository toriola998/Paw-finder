<template>
  <loading-spinner v-if="fetchingData && dataList.length === 0" />
  <div v-if="dataList.length > 0">
    <select-dropdown></select-dropdown>
    <ul class="image-wrapper">
      <li v-for="(item, index) in dataList" :key="index">
        <router-link :to="`/dog-profile/${item.id}`">
          <img :src="item.url" :alt="`A ${item.name} dog`" class="dog-image" loading="lazy" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

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
  transition: all 0.5s;
}

.dog-image:hover {
  cursor: pointer;
  transform: scale(0.9);
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
