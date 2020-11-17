<template>
  <header class="bg-white">
    <div class="flex px-5 py-3">
      <div class="w-1/6"></div>
      <div class="w-4/6 flex justify-center">
        <img src="/images/logo.svg" alt="Vegan Sailing Logo" />
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
    <div class="py-20" :class="isOpen ? 'hamburger-menu' : 'hidden'">
      <svg
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
        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        <nuxt-link class="nav-link" to="/">Private vegan sailing</nuxt-link>
        <nuxt-link class="nav-link" to="/">Book a cabin</nuxt-link>
        <nuxt-link class="nav-link" to="/">Gallery</nuxt-link>
        <nuxt-link class="nav-link" to="/">About</nuxt-link>
        <nuxt-link class="nav-link" to="/">Contact</nuxt-link>
      </div>
      <svg
        class="ml-auto mt-5"
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
    }
  },
}
</script>
<style>
.highlight-none {
  -webkit-tap-highlight-color: transparent;
}
</style>
