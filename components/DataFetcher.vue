<template>
  <div>
    <h1>Nuxt test</h1>
    <!-- <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul> -->
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   mountains: [],
    }
  },
  //   async fetch() {
  //     this.mountains = await fetch('http://localhost:3000/api/').then((res) =>
  //       res.json()
  //     )
  //   },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    console.log(ip)
    return { ip }
  },
}
</script>
