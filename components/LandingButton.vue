<template>
  <div>
    <nuxt-link :to="route"
      ><div
        class="landing-btn"
        :class="
          variantState ? 'landing-btn--primary' : 'landing-btn--secondary'
        "
      >
        <p class="font-poppins font-medium text-lg">{{ title }}</p>
        <p class="font-poppins font-light italic text-lg">{{ subtitle }}</p>
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
