<template>
  <div>
    <!-- mobile -->
    <div
      class="custom-height bg-no-repeat w-full object-center object-cover flex xs:hidden flex-col justify-between"
      style="background-image: url('/images/bg-main-xs.jpg')"
    >
      <HeaderLanding />
      <!-- <img src="/images/bg-main.jpg" />
    <img src="~/assets/images/bg-main.jpg" /> -->
      <div class="flex h-64 items-end">
        <landing-button
          class="w-1/2"
          variant="primary"
          :title="landingBtn.primary.title"
          :subtitle="landingBtn.primary.subtitle"
          :route="landingBtn.primary.route"
        />

        <landing-button
          class="w-1/2"
          variant="secondary"
          :title="landingBtn.secondary.title"
          :subtitle="landingBtn.secondary.subtitle"
          :route="landingBtn.secondary.route"
        />
      </div>
    </div>

    <!-- desktop -->
    <div
      class="h-screen bg-no-repeat bg-cover bg-center w-full object-center object-cover hidden xs:block"
      style="background-image: url('/images/bg-main.jpg')"
    >
      <div
        class="h-screen flex flex-col justify-between max-w-screen-landing mx-auto"
      >
        <HeaderLanding />

        <!-- <img src="/images/bg-main.jpg" />
    <img src="~/assets/images/bg-main.jpg" /> -->
        <div class="flex xs:h-auto xs:items-end">
          <landing-button
            class="w-1/2 mr-2 landing-desk"
            variant="primary"
            :title="landingBtn.primary.title"
            :subtitle="landingBtn.primary.subtitle"
            :route="landingBtn.primary.route"
            :content="this.$t('pages.private_sailing.content_mobile')"
          />

          <landing-button
            class="w-1/2 ml-2 landing-desk"
            variant="secondary"
            :title="landingBtn.secondary.title"
            :subtitle="landingBtn.secondary.subtitle"
            :route="landingBtn.secondary.route"
            :content="this.$t('pages.book_a_cabin.content_mobile')"
          />
        </div>
      </div>
      <!-- <h1>{{ $t('message') }}</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    landingBtn: {
      primary: {
        title: 'Private',
        subtitle: 'vegan sailing',
        route: '/private-sailing',
      },
      secondary: {
        title: 'Book',
        subtitle: 'a Cabin',
        route: '/book-a-cabin',
      },
    },
  }),

  layout: 'landing-layout',
}

// for mobile -> fetch height of viewport (process.browser -> client side js)
if (process.browser) {
  window.addEventListener('load', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}
</script>

<style>
html,
body {
  height: 100%;
}
/* apply height of vieport to css variable */
.custom-height {
  height: 100vh;
  /*  Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}

/* <!-- SOLUTION WITH DISPLAY: NONE -> transition problem --> */
/* .content-text,
.bottom-btn {
  display: none;
}
.landing-desk:hover .content-text {
  display: block;
}

.landing-desk:hover .bottom-btn {
  display: block;
} */

/* <!-- SOLUTION WITH VISIBILITY & OPACITY -->  */
.content-text,
.bottom-btn {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -999em;
  height: 0;
  position: absolute;
  transition: visibility 4s, height 0.5s, opacity 0.5s linear;
}

.landing-desk:hover .content-text {
  visibility: visible;
  opacity: 1;
  height: initial;
  position: relative;
  left: 0;
}

.landing-desk:hover .bottom-btn {
  display: block;
  visibility: visible;
  opacity: 1;
  height: initial;
  position: relative;
  left: 0;
}
@media only screen and (min-width: 375px) {
  .my-title {
    margin-top: 0 !important;
  }
  .landing-desk:hover .my-title {
    margin-top: 1.5rem !important;
  }
}
</style>
