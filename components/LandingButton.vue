<template>
  <div>
    <!-- mobile -->

    <nuxt-link :to="route" class="xs:hidden"
      ><div
        class="landing-btn h-24 sm:h-40 group"
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

    <!-- desktop-->

    <nuxt-link :to="route" class="hidden xs:block"
      ><div
        class="landing-btn h-24 sm:h-40 hover:h-64"
        :class="
          variantState ? 'landing-btn--primary' : 'landing-btn--secondary'
        "
      >
        <p class="font-poppins font-medium text-lg sm:text-4xl sm:pt-6">
          {{ title }}
        </p>
        <p class="font-poppins font-light italic text-lg sm:text-4xl">
          {{ subtitle }}
        </p>
        <p
          class="desc-text text-center max-w-landing sm:text-xl font-light leading-snug pt-2 sm:pt-6"
        >
          {{ texta }}
        </p>
        <p
          class="desc-text text-center max-w-landing sm:text-xl font-light leading-snug"
        >
          {{ textb }}
        </p>
        <p
          class="desc-text text-center max-w-landing sm:text-xl font-light leading-snug"
        >
          {{ textc }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['variant', 'title', 'subtitle', 'route', 'texta', 'textb', 'textc'],

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
