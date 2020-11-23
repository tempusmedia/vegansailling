<template>
  <div class="bg-qna">
    <h2 class="section-title font-semibold text-center py-10">
      Q<span class="font-light">&</span>A
    </h2>

    <div class="accordions">
      <dl
        v-for="(item, id) in items"
        class="bg-white rounded-lg mx-5 mb-3 px-8 py-4 cursor-pointer"
      >
        <dt @click="item.open = !item.open" class="accordion-title flex">
          <span class="accordion-signal mr-2" v-if="item.open">+</span>
          <span class="accordion-signal mr-2" v-if="!item.open">-</span>
          <p>{{ item.title }}</p>
        </dt>
        <dd v-if="item.open" class="accordion-content mt-5">
          {{ item.content }}
        </dd>
      </dl>
    </div>

    <div
      class="bg-white rounded-lg mx-5 mb-3 px-6 py-4 text-center border-vegan-red border border-solid"
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
</template>
<script>
export default {
  data() {
    if (
      this.$nuxt.$route.path == '/private-sailing' ||
      this.$nuxt.$route.path == '/hr/private-sailing'
    ) {
      return {
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
<style></style>
