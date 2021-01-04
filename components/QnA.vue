<!-- prettier-ignore -->
<template>
  <div
    class="relative flex flex-col max-w-screen-xl mx-auto sm:flex-row sm:mt-56"
  >
    <svg
      class="w-full mb-10 sm:mb-0 sm:hidden"
      viewBox="0 0 389 119"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 27.0874V23.5C48.3928 6.15647 113.574 -6.16145 184 4.16331L188.322 4.79715C269.9 16.7643 333.653 26.1166 389 10.1272L389 118.5H0V27.0874Z"
        fill="#EAECF1"
      />
    </svg>
    <div
      class="w-full pb-10 bg-qna lg:pb-36 lg:pt-24 lg:-ml-80 lg:pl-80 lg:pr-64 -mt-28 sm:mt-0 sm:pt-24"
    >
      <h2
        class="py-10 font-semibold text-center section-title sm:pt-0 sm:text-left sm:pl-10"
      >
        Q<span class="font-light">&</span>A
      </h2>
     

      <div class="accordions lg:max-w-xl">
        <dl
          @click="item.open = !item.open"
          v-for="(item, id) in items"
          class="px-8 py-4 mx-5 mb-3 bg-white rounded-lg cursor-pointer"
        >
          <dt class="flex pt-1 select-none accordion-title">
            <span class="mr-2 accordion-signal" v-if="item.open">-</span>
            <span class="mr-2 accordion-signal" v-if="!item.open">+</span>
            <p >{{ item.title }}</p>
          </dt><dd
            v-if="item.open"
            class="pb-3 whitespace-pre-line select-none accordion-content"
          >
            {{ item.content }}
          </dd>
        </dl>
      </div>
   
      <div
        class="px-6 py-4 mx-5 mb-3 text-center bg-white border border-solid rounded-lg sm:mb-10 border-vegan-red lg:max-w-more-questions"
      >
        <h2 class="italic font-light section-title">
          <span class="not-italic font-bold">Have</span> more questions?
        </h2>
        <p class="content">Contact us directly at</p>
        <a
          href="mailto:info@vegansailing.eu"
          class="font-medium content text-vegan-red"
          >info@vegansailing.eu</a
        >
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="700"
      class="absolute hidden -mt-20 lg:block lg:w-3/5 h-69pic -top-28 -right-36"
    >
      <img :src="qnaimage" alt="QnA Image" />

      <img
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="600"
        class="absolute z-30 hidden w-56 -mt-32 h-28 lg:block xl:bottom-24"
        src="/images/white-waves.svg"
        alt="White waves"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    if (
      this.$nuxt.$route.path == '/private-sailing' ||
      this.$nuxt.$route.path == '/hr/private-sailing'
    ) {
      return {
        qnaimage: '/images/private-food.jpg',
        items: {
          q1: {
            title: this.$t('components.qna.what_private'),
            content: this.$t('components.qna.what_content_private'),
            open: false,
          },
          q2: {
            title: this.$t('components.qna.food_private'),
            content: this.$t('components.qna.food_content_private'),
            open: false,
          },
          q3: {
            title: this.$t('components.qna.apa_private'),
            content: this.$t('components.qna.apa_content_private'),
            open: false,
          },
          q4: {
            title: this.$t('components.qna.safety_private'),
            content: this.$t('components.qna.safety_content_private'),
            open: false,
          },
          q5: {
            title: this.$t('components.qna.selection_private'),
            content: this.$t('components.qna.selection_content_private'),
            open: false,
          },
          q6: {
            title: this.$t('components.qna.prices_private'),
            content: this.$t('components.qna.prices_content_private'),
            open: false,
          },
          q7: {
            title: this.$t('components.qna.onboard_private'),
            content: this.$t('components.qna.onboard_content_private'),
            open: false,
          },
          q8: {
            title: this.$t('components.qna.pack_private'),
            content: this.$t('components.qna.pack_content_private'),
            open: false,
          },
        },
      }
    }
    if (
      this.$nuxt.$route.path == '/book-a-cabin' ||
      this.$nuxt.$route.path == '/hr/book-a-cabin'
    ) {
      return {
        qnaimage: '/images/cabin-woman.jpg',
        items: {
          q1: {
            title: 'Book-a-Cabin',
            content: this.$t('components.qna.what_content'),
            open: false,
          },
          q2: {
            title: this.$t('components.qna.food'),
            content: this.$t('components.qna.food_content'),
            open: false,
          },
          q3: {
            title: this.$t('components.qna.safety'),
            content: this.$t('components.qna.safety_content'),
            open: false,
          },
          q4: {
            title: this.$t('components.qna.selection'),
            content: this.$t('components.qna.selection_content'),
            open: false,
          },
          q5: {
            title: this.$t('components.qna.prices'),
            content: this.$t('components.qna.prices_content'),
            open: false,
          },
          q6: {
            title: this.$t('components.qna.onboard'),
            content: this.$t('components.qna.onboard_content'),
            open: false,
          },
          q7: {
            title: this.$t('components.qna.pack'),
            content: this.$t('components.qna.pack_content'),
            open: false,
          },
        },
      }
    }
  },
}
</script>
<style scoped></style>
