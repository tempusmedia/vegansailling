<template>
  <div
    class="bg-white bg-opacity-80 h-20 max-w-xl mx-5 my-1 border content xs:w-80"
  >
    <div
      class="border-l-4 border-vegan-orange h-full pl-8 flex flex-col justify-center"
    >
      <div class="section-title font-medium text-2xl">
        {{ name }}
      </div>
      <div class="font-medium">{{ date }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'date'],
}
</script>
