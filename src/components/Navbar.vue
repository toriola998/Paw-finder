<template>
    <nav class="logo-wrap" :style="{ 'background-color': backgroundColor }">
        <RouterLink to="/">
            <span class="bold">PAW</span>
            <span>finder</span>
        </RouterLink>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    backgroundColor: {
        type: String,
        default: 'transparent'
    }
})
</script>

<style scoped>
   .logo-wrap {
       padding: 1rem;
   }

   .logo-wrap a {
        color: var(--light);    
   }

   .bold {
        font-weight: 500;
        font-size: 1.6rem;
    }
</style>