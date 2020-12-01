<template>
  <header class="bg-white">
    <div class="px-5 py-3 hidden navBreak:flex">
      <div class="flex justify-start w-2/5">
        <nuxt-i18n-link
          exact
          class="nav-link nav-desk pr-8"
          :to="route.privateSailing"
          >{{ $t('components.header.private') }}</nuxt-i18n-link
        >
        <nuxt-i18n-link exact class="nav-link nav-desk" :to="route.bookCabin">{{
          $t('components.header.book')
        }}</nuxt-i18n-link>
      </div>
      <div class="w-1/5 flex justify-center">
        <nuxt-i18n-link class="nav-link" :to="route.home">
          <img src="/images/logo.svg" alt="Vegan Sailing Logo"
        /></nuxt-i18n-link>
      </div>
      <div class="flex justify-end w-2/5">
        <nuxt-i18n-link
          exact
          class="nav-link nav-desk pl-8"
          :to="route.gallery"
          >{{ $t('components.header.gallery') }}</nuxt-i18n-link
        >
        <nuxt-i18n-link
          exact
          class="nav-link nav-desk pl-8"
          :to="route.about"
          >{{ $t('components.header.about') }}</nuxt-i18n-link
        >
        <nuxt-i18n-link
          exact
          class="nav-link nav-desk pl-8"
          :to="route.contact"
          >{{ $t('components.header.contact') }}</nuxt-i18n-link
        >

        <!-- LANGUAGE SWITHCER WORKING  
        <LanguageSwitcher />
        -->
      </div>
    </div>
    <div class="flex px-5 py-3 navBreak:hidden">
      <div class="w-1/6"></div>
      <div class="w-4/6 flex justify-center">
        <nuxt-i18n-link :to="route.home">
          <img src="/images/logo.svg" alt="Vegan Sailing Logo"
        /></nuxt-i18n-link>
      </div>

      <div class="w-1/6 flex justify-end align-middle z-50">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="focus:outline-none highlight-none"
        >
          <svg class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              v-if="isOpen"
              stroke="#154752"
              stroke-width="2"
              d="M1.268 20.793l19.5-19.5M1.707 1.293l19.028 19.028"
            />

            <path
              v-if="!isOpen"
              stroke="#154752"
              stroke-width="2"
              d="M0 1h20M0 10h20M0 19h20"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="py-20 navBreak:hidden z-40"
      :class="isOpen ? 'hamburger-menu' : 'hidden'"
    >
      <svg
        class="mb-1"
        width="68"
        height="31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="a"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="68"
          height="31"
        >
          <path fill="#C4C4C4" d="M0 0h68v31H0z" />
        </mask>
        <g mask="url(#a)" stroke-width="3" stroke-miterlimit="10">
          <path
            d="M-122 5c9.45 0 9.45 9 18.9 9s9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.904 9C57.55 14 57.55 5 67 5"
            stroke="url(#paint0_linear)"
          />
          <path
            d="M-122 17c9.45 0 9.45 9 18.9 9s9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.904 9C57.55 26 57.55 17 67 17"
            stroke="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-122"
            y1="14"
            x2="67.007"
            y2="13.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED4924" />
            <stop offset="1" stop-color="#F17322" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="-122"
            y1="26"
            x2="67.007"
            y2="25.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED4924" />
            <stop offset="1" stop-color="#F17322" />
          </linearGradient>
        </defs>
      </svg>
      <div class="hamburger-items">
        <!-- <nuxt-i18n-link class="nav-link nav-mob" :to="route.home">{{
          $t('components.header.home')
        }}</nuxt-i18n-link> -->

        <!-- srediti ovdje kako treba, da home možda isto ima nav-link, s exact i pravilnim css-om -->

        <nuxt-i18n-link class="nav-link home-mob" :to="route.home">{{
          $t('components.header.home')
        }}</nuxt-i18n-link>
        <nuxt-i18n-link
          exact
          class="nav-link nav-mob"
          :to="route.privateSailing"
          >{{ $t('components.header.private') }}</nuxt-i18n-link
        >
        <nuxt-i18n-link exact class="nav-link nav-mob" :to="route.bookCabin">{{
          $t('components.header.book')
        }}</nuxt-i18n-link>
        <nuxt-i18n-link exact class="nav-link nav-mob" :to="route.gallery">{{
          $t('components.header.gallery')
        }}</nuxt-i18n-link>
        <nuxt-i18n-link exact class="nav-link nav-mob" :to="route.about">{{
          $t('components.header.about')
        }}</nuxt-i18n-link>
        <nuxt-i18n-link exact class="nav-link nav-mob" :to="route.contact">{{
          $t('components.header.contact')
        }}</nuxt-i18n-link>
      </div>
      <svg
        class="ml-auto mt-6"
        width="135"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2c9.45 0 9.45 9 18.9 9s9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.904 9c9.446 0 9.446-9 18.896-9"
          stroke="url(#paint0_linear)"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M0 14c9.45 0 9.45 9 18.9 9s9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.9 9 9.45-9 18.9-9 9.45 9 18.904 9c9.446 0 9.446-9 18.896-9"
          stroke="url(#paint1_linear)"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="11"
            x2="189.007"
            y2="10.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED4924" />
            <stop offset="1" stop-color="#F17322" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="23"
            x2="189.007"
            y2="22.691"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ED4924" />
            <stop offset="1" stop-color="#F17322" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      route: {
        home: '/',
        privateSailing: 'private-sailing',
        bookCabin: 'book-a-cabin',
        gallery: 'gallery',
        about: 'about',
        contact: 'contact',
      },
    }
  },
  /*if route changes, navbar closes*/
  watch: {
    $route() {
      this.isOpen = false
    },
  },
}
</script>
<style>
.highlight-none {
  -webkit-tap-highlight-color: transparent;
}
</style>
