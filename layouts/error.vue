<template>
  <div class="flex justify-center items-center h-48 font-poppins">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
