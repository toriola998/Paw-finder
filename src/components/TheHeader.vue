<template>
  <header class="home-header">
    <div>
      <Navbar />
      <div class="content">
        <h1>Dive into Dogdom!</h1>
        <p>Explore Images and Profiles Of Dogs.</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import Navbar from './Navbar.vue'
</script>

<style scoped>
.home-header {
  background-image: url('@/assets/images/bg-header.jpg');
  background-color: var(--primary);
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.home-header::after {
  content: '';
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.home-header > div {
  position: relative;
  z-index: 10;
}

.content {
  padding: 5rem 1rem 0;
}

.home-header h1,
.home-header p {
  text-align: center;
  color: var(--light);
}

.home-header p {
  font-size: 0.85rem;
}

@media screen and (min-width: 700px) {
  .home-header {
    height: 350px;
  }

  .home-header h1 {
    font-size: 3rem;
  }

  .home-header p {
    font-size: 1rem;
  }
}
</style>
