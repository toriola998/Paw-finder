<template>
  <EmptyState v-if="errorNote" :note="errorNote">
    <div class="return-home">
      <button @click="returnHome()" class="btn">Return Home</button>
    </div>
  </EmptyState>
  <loading-spinner v-if="fetchingData && dataList.length === 0" />
  <div v-if="dataList.length > 0 && !errorNote">
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
import EmptyState from './EmptyState.vue'
import { onMounted } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

import LoadingSpinner from '../components/LoadingSpinner.vue'
import SelectDropdown from './SelectDropdown.vue'

const router = useRouter()
const store = useDogDataStore()
const { getData } = store
const { errorNote } = storeToRefs(store)
const { dataList } = storeToRefs(store)
const { duplicateDataList } = storeToRefs(store)
const { fetchingData } = storeToRefs(store)

onMounted(() => {
  getData()
})

function returnHome() {
  dataList.value = duplicateDataList.value
  router.go(0)
}
</script>

<style scoped>
.image-wrapper {
  display: grid;
  justify-content: center;
  row-gap: 1.5rem;
  padding: 0 1rem 10rem;
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

.return-home {
  display: flex;
  justify-content: center;
}

.return-home button {
  background-color: var(--dark-1);
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
