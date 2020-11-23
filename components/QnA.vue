<template>
  <div class="bg-qna">
    <h2>Q&A</h2>

    <div>
      <h2>Have more questions?</h2>
      <p>Contact us directly at</p>
      <p>info@vegansailing.eu</p>
    </div>

    <h1>Simple Accordion w/ Vue JS</h1>
    <div class="accordions">
      <dl v-for="(item, id) in items">
        <dt @click="item.open = !item.open">{{ item.title }}</dt>
        <dd v-if="item.open">{{ item.content }}</dd>
      </dl>
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
