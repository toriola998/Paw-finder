<template>
  <div class="empty-state">
    <img
      src="@/assets/images/empty-state.svg"
      alt=""
      role="presentation"
      height="230"
      width="230"
      class="empty-image"
    />
    <p class="err_msg">{{ note }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  note: {
    type: String,
    default: 'Something seems wrong'
  }
})
</script>

<style scoped>
.empty-state {
  margin-bottom: 10rem;
}
.err_msg {
  font-weight: 600;
  text-align: center;
  max-width: 400px;
  margin: 0 auto 1rem;
}

.empty-image {
  display: block;
  margin: auto;
}
</style>
