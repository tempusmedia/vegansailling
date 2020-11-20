<template>
  <div>
    <nuxt-link :to="route">
      <p class="font-medium text-sm sm:text-btn"><slot></slot></p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['route'],
}
</script>
<style></style>
