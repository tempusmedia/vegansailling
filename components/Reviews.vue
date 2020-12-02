<template>
  <div>
    <!-- mobile -->
    <div
      class="xs:hidden bg-no-repeat w-full object-center object-cover"
      style="background-image: url('/images/review-bg.jpg')"
    >
      <div>
        <h2 class="section-title font-semibold text-center pt-16">Reviews</h2>
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
            <p class="content px-10 text-center">
              {{ review.content }}
            </p>
            <p class="content px-10 text-center pt-6 pb-10">
              {{ review.person }}
            </p>
          </dt>
        </dl>
      </carousel>
    </div>

    <!-- desktop -->
    <div
      class="hidden xs:block bg-no-repeat w-full object-center object-cover my-reviews my-desk-height"
      style="background-image: url('/images/reviews-desk.jpg')"
    >
      <div>
        <h2 class="section-title font-semibold text-center pt-12">Reviews</h2>
      </div>

      <carousel
        :items="1"
        :autoplay="true"
        :navigation="false"
        :dots="true"
        class="relative pt-10 pb-5 mx-auto"
        :margin="5"
      >
        <dl v-for="(review, id) in reviews" class="carousel-w mx-auto">
          <dt>
            <p class="content px-10 text-center">
              {{ review.content }}
            </p>
            <p class="content px-10 text-center pt-6 pb-10">
              {{ review.person }}
            </p>
          </dt>
        </dl>
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
          person: this.$t('components.reviews.r1'),
          content: this.$t('components.reviews.r1_content'),
        },
        r3: {
          person: this.$t('components.reviews.r1'),
          content: this.$t('components.reviews.r1_content'),
        },
        r4: {
          person: this.$t('components.reviews.r1'),
          content: this.$t('components.reviews.r1_content'),
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
</style>
