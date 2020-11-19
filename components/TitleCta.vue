<template>
  <div
    class="landing-btn h-title-cta bg-white bg-opacity-80 font-poppins mx-5 mt-5"
  >
    <!-- TITLE in slot because mixed styles -->
    <slot></slot>

    <p
      class="font-poppins text-center max-w-md sm:text-xl font-light leading-snug pt-2 sm:pt-6 text-vegan-blue"
    >
      {{ firstline }}
    </p>
    <p
      class="font-poppins text-center max-w-md sm:text-xl font-light leading-snug text-vegan-blue"
    >
      {{ secondline }}
    </p>
    <p
      class="font-poppins text-center max-w-md sm:text-xl font-light leading-snug text-vegan-blue"
    >
      {{ thirdline }}
    </p>
    <Btn
      :route="route"
      class="btn btn--secondary xs:block mt-5 mb-5 sm:mt-12 sm:mb-4"
      >Book now</Btn
    >
  </div>
</template>

<script>
export default {
  props: ['route', 'firstline', 'secondline', 'thirdline'],
}
</script>

<style></style>
