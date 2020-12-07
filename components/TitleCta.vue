<template>
  <div>
    <div
      class="landing-btn h-title-cta xs:h-desk-cta bg-white bg-opacity-80 font-poppins mx-5 mt-5 xs:flex xs:flex-col xs:items-start xs:w-title-wta"
    >
      <!-- TITLE in slot because mixed styles -->
      <div class="xs:px-12">
        <slot name="title"></slot>

        <p
          class="font-poppins text-center xs:text-left max-w-md xs:text-xl font-light leading-snug text-vegan-blue"
          style="white-space: pre-line"
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
