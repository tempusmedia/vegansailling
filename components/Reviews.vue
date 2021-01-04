<template>
  <div>
    <!-- mobile -->
    <div
      class="w-full bg-top bg-no-repeat bg-cover xs:hidden"
      style="background-image: url('/images/reviews-desk.jpg')"
    >
      <div>
        <h2 class="pt-16 font-semibold text-center section-title">Reviews</h2>
      </div>

      <carousel
        :items="1"
        :autoplay="true"
        :responsive="false"
        :navigation="false"
        :dots="true"
        class="relative pt-10 pb-10"
        :margin="5"
      >
        <dl v-for="(review, id) in reviews">
          <dt>
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g295370-d21245700-Reviews-Vegan_Sailing-Split_Split_Dalmatia_County_Dalmatia.html"
            >
              <p class="px-10 text-center content">
                {{ review.content }}
              </p>
              <p class="px-10 pt-6 pb-10 text-center content">
                - {{ review.person }}
              </p>
            </a>
          </dt>
        </dl>
      </carousel>
    </div>

    <!-- desktop -->
    <div
      class="hidden object-cover object-center w-full pt-1 bg-no-repeat xs:block my-reviews my-desk-height"
      style="background-image: url('/images/reviews-desk.jpg')"
    >
      <div>
        <h2 class="pt-12 font-semibold text-center section-title">Reviews</h2>
      </div>

      <carousel
        :items="1"
        :autoplay="true"
        :navigation="true"
        :dots="true"
        class="relative pt-6 pb-2 mx-auto max-w-reviews-reach"
        :margin="5"
      >
        <template slot="prev"
          ><span class="absolute z-10 ml-5 prev top-18">
            <!-- without <p> not showing arrow? -->

            <img class="blue-icon-height" src="/nav/arrow-blue-l.svg"
          /></span>
        </template>

        <dl v-for="(review, id) in reviews" class="mx-auto carousel-w">
          <dt>
            <a
              target="_blank"
              href="https://www.tripadvisor.com/Attraction_Review-g295370-d21245700-Reviews-Vegan_Sailing-Split_Split_Dalmatia_County_Dalmatia.html"
            >
              <p class="px-10 text-center content">
                {{ review.content }}
              </p>
              <p class="px-10 pt-3 pb-2 text-center content">
                - {{ review.person }}
              </p>
            </a>
          </dt>
        </dl>

        <template slot="next"
          ><span class="absolute right-0 z-10 mr-5 next top-18"
            ><img
              class="blue-icon-height"
              src="/nav/arrow-blue-r.svg"
              alt="next" /></span
        ></template>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: {
        r1: {
          person: this.$t('components.reviews.r1'),
          content: this.$t('components.reviews.r1_content'),
        },
        r2: {
          person: this.$t('components.reviews.r2'),
          content: this.$t('components.reviews.r2_content'),
        },
        r3: {
          person: this.$t('components.reviews.r3'),
          content: this.$t('components.reviews.r3_content'),
        },
        r4: {
          person: this.$t('components.reviews.r4'),
          content: this.$t('components.reviews.r4_content'),
        },
      },
    }
  },
}
</script>
<style scoped>
.carousel-w {
  max-width: 666px;
}
.my-reviews {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.my-desk-height {
  height: 356px;
}
.blue-icon-height {
  height: 11px;
}
</style>
