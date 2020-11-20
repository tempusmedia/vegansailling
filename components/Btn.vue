<template>
  <div class="max-w-btn mx-auto xs:mx-0">
    <nuxt-link :to="route">
      <p class="font-medium text-btn text-center xs:text-left"><slot></slot></p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['route'],
}
</script>
<style></style>
