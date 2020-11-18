<template>
  <div>
    <nuxt-link :to="route"
      ><div
        class="landing-btn h-24 sm:h-40"
        :class="
          variantState ? 'landing-btn--primary' : 'landing-btn--secondary'
        "
      >
        <p class="font-poppins font-medium text-lg sm:text-4xl">{{ title }}</p>
        <p class="font-poppins font-light italic text-lg sm:text-4xl">
          {{ subtitle }}
        </p>
      </div></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['variant', 'title', 'subtitle', 'route'],

  computed: {
    variantState: function () {
      if (this.variant == 'primary') {
        return true
      }
    },
  },
}
</script>

<style></style>
