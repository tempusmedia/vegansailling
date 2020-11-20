<template>
  <main>
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      English
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'hr'" :to="switchLocalePath('hr')">
      Hrvatski
    </nuxt-link>
  </main>
</template>
<style></style>
