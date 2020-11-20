<template>
  <div class="max-w-btn mx-auto xs:mx-0">
    <!-- IZBRISATI OVAJ PRVI AKO NEĆE. TU INAČE TREBA PROSLIJEDITI ROUTE U NUXT LINK. OD SAD ISKOMENTIRAVAT DIJELOVE KODA-->
    <!-- <nuxt-i18n-link :to="route">{{ $t('message') }}</nuxt-i18n-link> -->
    <nuxt-link :to="localePath(route)">
      <p class="font-medium text-btn text-center xs:text-left"><slot></slot></p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['route'],
}
</script>
<style></style>
