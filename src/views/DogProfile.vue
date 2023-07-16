<template>
  <Navbar backgroundColor="black" />
  <main class="dog-profile container">
    <button @click="router.back()" class="go-back">
      <img src="@/assets/images/icon-back.png" alt="" role="presentation" height="21" width="20" />
      Back
    </button>
    <div>
      <div>
        <img
          :src="dog.url"
          :alt="`A ${dog.name} dog`"
          class="dog-image"
          :class="{ gray: isGray, sepia: isSepia }"
        />
        <div class="btn-wrapper">
          <button>Cartoonify</button>
          <button @click="applyGrayscale()">Grayscale</button>
          <button @click="applySepia()">Sepia</button>
          <button @click="reset()">
            <img src="@/assets/images/icon-reset.png" alt="Reset image effects" width="25" />
            Reset
          </button>
        </div>
      </div>

      <div>
        <p>
          <span class="bold">Name:</span>
          <span> {{ dogName }}</span>
        </p>
        <p>
          <span class="bold">Height</span>
          <span> {{ `${lowerHeight}" to ${upperHeight}"` }}</span>
        </p>
        <p>
          <span class="bold">Weight</span>
          <span> {{ `${lowerWeight}" to ${upperWeight}"` }}</span>
        </p>
        <p>
          <span class="bold">Life span:</span>
          <span> {{ lifeSpan }}</span>
        </p>
        <p>
          <span class="bold">Purpose of breeding:</span>
          <span> {{ purposeOfBreeding }}</span>
        </p>
        <p v-if="dogType">
          <span class="bold">Type of dog:</span>
          <span> {{ dogType }}</span>
        </p>
        <p>
          <span class="bold">Temperament:</span>
          <span> {{ temperament }}</span>
        </p>
        <p v-if="dogOrigin">
          <span class="bold">Origin:</span>
          <span> {{ dogOrigin }}</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { computed, ref } from 'vue'
import { useDogDataStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useDogDataStore()
const { dataList } = storeToRefs(store)

const dogID = computed(() => {
  return route.params.id
})

let dog = computed(() => {
  if (dataList) {
    return dataList.value.find((item) => {
      return item.id === dogID.value
    })
  }
  return undefined
})

const purposeOfBreeding = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.bred_for || ''
    })
    .join(', ')
})

const dogType = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.breed_group || ''
    })
    .join(', ')
})

const dogName = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.name || ''
    })
    .join(', ')
})

const temperament = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.temperament || ''
    })
    .join(', ')
})

const dogOrigin = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.origin || ''
    })
    .join(', ')
})

const lifeSpan = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.life_span || ''
    })
    .join(', ')
})

const dogHeightInInches = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.height.imperial || ''
    })
    .join(', ')
})

const heightRangeInInches = dogHeightInInches.value
const [lowerHeight, upperHeight] = heightRangeInInches.split('-').map((value) => value.trim())

const dogWeightInInches = computed(() => {
  return dog.value.breeds
    .map((item) => {
      return item.weight.imperial || ''
    })
    .join(', ')
})

const isGray = ref(false)
const isSepia = ref(false)

function applyGrayscale() {
  if (isSepia.value === true) {
    isSepia.value = false
  }
  isGray.value = true
}

function applySepia() {
  if (isGray.value === true) {
    isGray.value = false
  }
  isSepia.value = true
}

function reset() {
  isGray.value = false
  isSepia.value = false
}
const weightRangeInInches = dogWeightInInches.value
const [lowerWeight, upperWeight] = weightRangeInInches.split('-').map((value) => value.trim())
</script>

<style scoped>
.go-back {
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.go-back:hover {
  color: var(--primary);
}
.dog-profile {
  padding: 2rem 1rem 10rem;
}

.gray {
  filter: grayscale(100);
}

.sepia {
  filter: sepia(100%);
}

.dog-profile .dog-image {
  width: 100%;
  border-radius: 5px;

  /* height: auto;
  max-height: 400px;
  object-fit: cover; */
}

.dog-profile > div {
  display: grid;
  gap: 3rem;
}

.dog-profile p {
  margin-bottom: 1rem;
}

.dog-profile .bold {
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 0.5rem;
}

.btn-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-wrapper button {
  padding: 0.7rem 2.3rem;
  display: flex;
  align-items: center;
  height: 3rem;
  border-radius: 5px;
  transition: all 0.5s;
  color: var(--light);
}

.btn-wrapper button:hover {
  transform: scale(0.93);
}

.btn-wrapper button:nth-child(2) {
  background-color: var(--primary);
}

.btn-wrapper button:nth-child(1) {
  background-color: var(--blue);
}

.btn-wrapper button:nth-child(3) {
  background-color: #b76082;
}

.btn-wrapper button:nth-child(4) {
  background-color: var(--dark);
}

@media screen and (min-width: 760px) {
  .dog-profile div {
    grid-template-columns: 50% auto;
    align-items: center;
  }

  .dog-profile .bold,
  .go-back {
    font-size: 1rem;
  }

  .dog-profile span:nth-child(2) {
    font-size: 1.1rem;
  }
}
</style>
