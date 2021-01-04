<template>
  <div class="absolute w-full sm:w-527px">
    <div
      class="mx-auto mt-5 bg-white md:mx-5 landing-btn h-title-cta sm:h-desk-cta bg-opacity-80 font-poppins sm:flex sm:flex-col sm:items-start w-90vw xs:w-430px sm:w-title-wta"
    >
      <!-- TITLE in slot because mixed styles -->
      <div class="xs:px-12">
        <slot name="title"></slot>

        <p
          class="max-w-md font-light leading-snug text-center whitespace-pre-line font-poppins sm:text-left sm:text-xl text-vegan-blue"
        >
          {{ content }}
          {{ contentMobile }}
        </p>

        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content', 'contentMobile'],
}
</script>

<style></style>
<!-- ukloniti viška varijable i sve staviti sa  \n. možda čak napraviti sad jednu varijablu gdje se u jednoj unosi jedan n, a u drugoj drugi -->
