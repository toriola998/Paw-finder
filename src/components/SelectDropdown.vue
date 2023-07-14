<template>
  <label for="custom-dropdown" hidden>Search dog by breed</label>
  <div class="custom-dropdown" role="listbox" aria-labelledby="custom-dropdown-label" tabindex="0">
    <button
      id="custom-dropdown-button"
      aria-haspopup="true"
      aria-expanded="false"
      aria-labelledby="custom-dropdown-label custom-dropdown-button"
      aria-controls="custom-dropdown-options"
      @click="toggleDropdown"
    >
      <span>{{ fetchingMessage }}</span>
      <img
        src="@/assets/images/icon-dropdown.png"
        alt=""
        role="presentation"
        height="15"
        width="15"
      />
    </button>
    <ul
      v-if="showDropdown === true"
      id="custom-dropdown-options"
      role="option"
      aria-labelledby="custom-dropdown-label custom-dropdown-button"
      aria-hidden="true"
    >
      <li
        role="option"
        aria-selected="false"
        v-for="(item, index) in breedList"
        :key="index"
        @click="getBreed(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

const fetchingData = ref(false)
const fetchingMessage = ref('')
const breedList = ref([])
const breed = ref('')

function getBreedList() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        fetchingMessage.value = 'Failed to get breeds'
      }
    })
    .then((data) => {
      let responseObject = data.message
      for (const key in responseObject) {
        if (Array.isArray(responseObject[key])) {
          // Push the keys into the new array
          breedList.value.push(key)
        }
      }
      console.log(breedList.value)
      fetchingMessage.value = 'Search dogs by breed'
    })
    .catch((err) => {
      console.log(err)
      fetchingMessage.value = 'Failed to get breeds'
    })
    .finally(() => {
      fetchingData.value = false
    })
}

function getBreed(arg) {
  breed.value = arg
  console.log(breed.value)
}

onMounted(() => {
  getBreedList()
})
</script>

<style scoped>
.custom-dropdown {
  position: relative;
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.custom-dropdown ul {
  position: absolute;
  width: 92%;
  margin-top: 1rem;
  height: 350px;
  overflow-y: scroll;
}

.custom-dropdown ul,
.custom-dropdown button {
  background-color: var(--light);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.custom-dropdown ul li {
  padding: 1rem;
}

.custom-dropdown ul li:hover {
  background-color: var(--light-grey);
  cursor: pointer;
}

.custom-dropdown button {
  font-family: 'Poppins';
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 700px) {
  .custom-dropdown {
    width: 600px;
  }
  .custom-dropdown ul {
    width: 95%;
  }

  .custom-dropdown button {
    font-size: 1rem;
  }
}
</style>
