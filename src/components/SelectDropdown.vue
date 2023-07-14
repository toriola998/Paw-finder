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
      <span>Search dogs by breed</span>
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
      <li role="option" aria-selected="false">Beignj</li>
      <li role="option" aria-selected="false">Rotweiler</li>
      <li role="option" aria-selected="false">Option 3</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}
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