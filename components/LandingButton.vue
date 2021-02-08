<template>
  <div>
    <!-- mobile -->

    <nuxt-link :to="route" class="xs:hidden"
      ><div
        class="h-24 landing-btn sm:h-40 group"
        :class="
          variantState ? 'landing-btn--primary' : 'landing-btn--secondary'
        "
      >
        <p class="text-lg font-medium font-poppins sm:text-4xl">{{ title }}</p>
        <p class="text-lg italic font-light font-poppins sm:text-4xl">
          {{ subtitle }}
        </p>
      </div></nuxt-link
    >

    <!-- desktop-->

    <nuxt-link :to="route" class="hidden xs:block"
      ><div
        class="h-24 landing-btn sm:h-40 hover:pt-10 hover:h-64 sm:hover:h-landing sm:hover:pt-8 my-transition"
        :class="
          variantState ? 'landing-btn--primary' : 'landing-btn--secondary'
        "
      >
        <p
          class="text-lg font-medium font-poppins sm:text-4xl sm:mt-6 sm:leading-landing my-title"
        >
          {{ title }}
        </p>
        <p
          class="text-lg italic font-light font-poppins sm:text-4xl sm:leading-landing"
        >
          {{ subtitle }}
        </p>
        <p
          class="pt-2 font-light leading-snug text-center font-poppins content-text max-w-landing sm:text-xl sm:pt-6"
        >
          {{ content }}
        </p>

        <VegeBtn
          :route="route"
          :class="
            variantState ? 'btn--primary-landing' : 'btn--secondary-landing'
          "
          class="mt-5 mb-5 btn bottom-btn xs:block sm:mt-12 sm:mb-4"
        >
          {{ $t('components.vegebtn.see_more') }}</VegeBtn
        >
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['variant', 'title', 'subtitle', 'route', 'content'],

  computed: {
    variantState: function () {
      if (this.variant == 'primary') {
        return true
      }
    },
  },
}
</script>

<style scoped>
.my-transition {
  transition: 0.2s all ease-out;
}
</style>
