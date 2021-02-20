<template>
  <div>
    <!-- mobile -->
    <!-- <div
      class="flex flex-col justify-between object-cover object-center w-full bg-no-repeat custom-height xs:hidden"
      style="background-image: url('/images/bg-main-xs.jpg')"
    > -->

    <!-- for pure js preloader (uncomment code in script)-->
    <!-- <Preloader v-if="loaderVisibility" id="preloader" /> -->
    <!-- <Preloader id="preloader" /> -->
    <Preloader v-if="loaderVisibility" />

    <video-background
      ref="mobilevideo"
      poster="/images/bg-main.jpg"
      src="https://paras.hr/mobile2.mp4"
      class="flex flex-col justify-between object-cover object-center w-full bg-no-repeat custom-height xs:hidden"
    >
      <div
        class="flex flex-col justify-between object-cover object-center w-full bg-no-repeat custom-height xs:hidden"
      >
        <HeaderLanding />
        <!-- <img src="/images/bg-main.jpg" />
    <img src="~/assets/images/bg-main.jpg" /> -->
        <div class="flex items-end h-64">
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
    </video-background>

    <!-- </div> -->

    <!-- desktop -->
    <!-- <div
      class="hidden object-cover object-center w-full h-screen bg-center bg-no-repeat bg-cover xs:block"
      style="background-image: url('/images/bg-main.jpg')"
    > -->

    <video-background
      ref="desktopvideo"
      poster="/images/bg-main.jpg"
      src="https://paras.hr/desktop2.mp4"
      class="hidden object-cover object-center w-full h-screen bg-center bg-no-repeat bg-cover xs:block"
    >
      <div
        class="flex flex-col justify-between h-screen mx-auto max-w-screen-landing"
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
    </video-background>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.loaderVisibility = false
      }
    }
    setTimeout(() => (this.loaderVisibility = false), 5000)
  },
  data: () => ({
    loaderVisibility: true,
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
  computed: {
    loadingIndicator() {
      if (process.browser) {
        return window.$nuxt.$root.$loading.percent
      }
    },
  },

  layout: 'landing-layout',
  transition: {
    name: 'fade',
  },
  head: {
    title: 'Vegan Sailing | Experience Vegan Sailing In Croatia',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'Vegan Sailing | Experience Vegan Sailing In Croatia',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Vegan Sailing | Rent a sailing boat with a vegan cook and/or skipper or join an all-inclusive vegan sailing trip and share a boat with other vegans',
      },
      //opengraph facebook
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vegan.tempusmedia.hr/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Vegan Sailing | Experience Vegan Sailing In Croatia',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Vegan Sailing | Rent a sailing boat with a vegan cook and/or skipper or join an all-inclusive vegan sailing trip and share a boat with other vegans',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/images/facebookOG.jpg`,
      },
      //twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://vegan.tempusmedia.hr/',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Vegan Sailing | Experience Vegan Sailing In Croatia',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Vegan Sailing | Rent a sailing boat with a vegan cook and/or skipper or join an all-inclusive vegan sailing trip and share a boat with other vegans',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: `${process.env.BASE_URL}/images/facebookOG.jpg`,
      },
    ],
  },
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
@media only screen and (min-width: 450px) {
  .my-title {
    margin-top: 0 !important;
  }
  .landing-desk:hover .my-title {
    margin-top: 1.5rem !important;
  }
}

.newstyle {
  visibility: hidden;
}
</style>
