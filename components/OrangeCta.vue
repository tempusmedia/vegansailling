<template>
  <div
    class="relative z-30 w-full mx-auto mt-5 bg-cover landing-btn h-title-cta bg-cta-orange font-poppins sm:mt-0 xs:flex xs:flex-col xs:items-start md:h-orange-cta md:w-orange-cta"
    style="background-image: url('/images/orange-bg-pattern.jpg')"
  >
    <!-- TITLE in slot because mixed styles -->
    <div class="xs:px-12 xs:mx-auto">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <!-- <p
        class="max-w-md font-light leading-snug text-center font-poppins xs:text-left xs:text-xl text-vegan-blue"
        style="white-space: pre-line"
      >

      </p> -->

      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'contentMobile'],
}
</script>

<style scoped></style>
<!-- ukloniti viška varijable i sve staviti sa  \n. možda čak napraviti sad jednu varijablu gdje se u jednoj unosi jedan n, a u drugoj drugi -->
