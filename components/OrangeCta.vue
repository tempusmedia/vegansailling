<template>
  <div
    class="landing-btn h-title-cta bg-cta-orange font-poppins mt-5 sm:mt-0 xs:flex xs:flex-col xs:items-start my-orange-cont mx-auto relative z-50 w-full"
  >
    <!-- TITLE in slot because mixed styles -->
    <div class="xs:px-12 xs:mx-auto">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <!-- <p
        class="font-poppins text-center xs:text-left max-w-md xs:text-xl font-light leading-snug text-vegan-blue"
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

<style scoped>
@media only screen and (min-width: 375px) {
  .my-orange-cont {
    width: 1200px;
    height: 286px;
  }
}
</style>
<!-- ukloniti viška varijable i sve staviti sa  \n. možda čak napraviti sad jednu varijablu gdje se u jednoj unosi jedan n, a u drugoj drugi -->
