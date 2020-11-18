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
      <div class="flex">
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
        <div class="flex">
          <landing-button
            class="w-1/2 pr-2"
            variant="primary"
            :title="landingBtn.primary.title"
            :subtitle="landingBtn.primary.subtitle"
            :route="landingBtn.primary.route"
          />

          <landing-button
            class="w-1/2 pl-2"
            variant="secondary"
            :title="landingBtn.secondary.title"
            :subtitle="landingBtn.secondary.subtitle"
            :route="landingBtn.secondary.route"
          />
        </div>
      </div>
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
        route: '/private_sailing',
      },
      secondary: {
        title: 'Book',
        subtitle: 'a Cabin',
        route: '/book_a_cabin',
      },
    },
  }),

  layout: 'landing-layout',
}

// for mobile -> fetch height of viewport (process.browser -> client side js)
if (process.browser) {
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
  height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
}
</style>
