<template>
  <div class="bg-qna">
    <h2 class="section-title font-semibold text-center">
      Q<span class="font-light">&</span>A
    </h2>

    <div class="accordions">
      <dl
        v-for="(item, id) in items"
        class="bg-white rounded mx-5 mb-3 px-8 py-4"
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

    <div class="mx-5">
      <h2>Have more questions?</h2>
      <p>Contact us directly at</p>
      <p>info@vegansailing.eu</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: {
        q1: {
          title: this.$t('components.qna.what'),
          content: this.$t('components.qna.what_content'),
          open: true,
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
  },
}
</script>
<style></style>
