<template>
  <div class="loader-wrap">
    <p class="loader">Please wait...</p>
  </div>
</template>

<style scoped>
.loader-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  text-align: center;
  font-weight: 500;
}

.loader::before {
  content: '';
  display: block;
  border: 7px solid var(--light-grey); /* Light grey */
  border-top: 7px solid var(--primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.5s linear infinite;
  margin: 0 auto 0.5rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
