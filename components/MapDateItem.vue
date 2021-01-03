<template>
  <div
    class="h-20 max-w-xl mx-5 my-1 bg-white border bg-opacity-80 content xs:w-88"
  >
    <div
      class="flex flex-col justify-center h-full pl-8 border-l-4 border-vegan-orange"
    >
      <div class="text-2xl font-medium section-title">
        {{ name
        }}<span class="text-2xl font-normal section-title">{{ region }}</span>
      </div>
      <div class="font-medium">{{ date }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'date', 'region'],
}
</script>
