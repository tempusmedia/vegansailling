<template>
  <div class="w-full">
    <Header class="max-w-screen-xl mx-auto" />
    <Nuxt />
    <Footer class="max-w-screen-xl mx-auto" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style></style>
