<template>
  <div>
    <nuxt-i18n-link :to="route">
      <p class="font-medium text-sm sm:text-btn"><slot></slot></p>
    </nuxt-i18n-link>
  </div>
</template>
<script>
export default {
  props: ['route'],
}
</script>
<style></style>
