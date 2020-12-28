<template>
  <div
    class="max-w-screen-xl mx-auto flex flex-col sm:flex-row relative sm:mt-56"
  >
    <svg
      class="w-full sm:hidden"
      viewBox="0 0 389 119"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 27.0874V23.5C48.3928 6.15647 113.574 -6.16145 184 4.16331L188.322 4.79715C269.9 16.7643 333.653 26.1166 389 10.1272L389 118.5H0V27.0874Z"
        fill="#EAECF1"
      />
    </svg>
    <div
      class="bg-qna lg:pb-36 lg:pt-24 lg:-ml-80 lg:pl-80 lg:pr-64 w-full -mt-28 sm:mt-0 sm:pt-24"
    >
      <h2
        class="section-title font-semibold text-center py-10 sm:pt-0 sm:text-left sm:pl-10"
      >
        Q<span class="font-light">&</span>A
      </h2>

      <div class="accordions lg:max-w-xl">
        <dl
          @click="item.open = !item.open"
          v-for="(item, id) in items"
          class="bg-white rounded-lg mx-5 mb-3 px-8 py-4 cursor-pointer"
        >
          <dt class="accordion-title flex select-none">
            <span class="accordion-signal mr-2" v-if="item.open">+</span>
            <span class="accordion-signal mr-2" v-if="!item.open">-</span>
            <p>{{ item.title }}</p>
          </dt>
          <dd v-if="item.open" class="accordion-content mt-5 select-none">
            {{ item.content }}
          </dd>
        </dl>
      </div>

      <div
        class="bg-white rounded-lg mx-5 mb-3 sm:mb-10 px-6 py-4 text-center border-vegan-red border border-solid lg:max-w-more-questions"
      >
        <h2 class="section-title font-light italic">
          <span class="font-bold not-italic">Have</span> more questions?
        </h2>
        <p class="content">Contact us directly at</p>
        <a
          href="mailto:info@vegansailing.eu"
          class="content font-medium text-vegan-red"
          >info@vegansailing.eu</a
        >
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="700"
      class="hidden lg:block lg:w-3/5 h-69pic absolute -top-28 -mt-20 -right-36"
    >
      <img :src="qnaimage" alt="QnA Image" />

      <img
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-duration="600"
        class="w-56 h-28 absolute z-30 -mt-32 hidden lg:block xl:bottom-24"
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
            title: this.$t('components.qna.what'),
            content: this.$t('components.qna.what_content'),
            open: false,
          },
          q2: {
            title: this.$t('components.qna.food'),
            content: this.$t('components.qna.food_content'),
            open: true,
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
            title: this.$t('components.qna.onboard'),
            content: this.$t('components.qna.onboard_content'),
            open: false,
          },
          q6: {
            title: this.$t('components.qna.pack'),
            content: this.$t('components.qna.pack_content'),
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
            title: 'Book a Cabin Page (Radi)',
            content: this.$t('components.qna.what_content'),
            open: false,
          },
          q2: {
            title: this.$t('components.qna.food'),
            content: this.$t('components.qna.food_content'),
            open: true,
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
            title: this.$t('components.qna.onboard'),
            content: this.$t('components.qna.onboard_content'),
            open: false,
          },
          q6: {
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
