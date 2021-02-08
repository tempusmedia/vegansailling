<template>
  <div
    class="relative h-20 max-w-xl mx-5 my-1 bg-white border bg-opacity-80 content xs:w-88 group"
  >
    <div class="w-0 h-20 group-hover:bg-vegan-orange stretcher">
      <a :href="route">
        <div
          class="absolute z-20 flex flex-col justify-center h-full pl-8 border-l-4 border-vegan-orange"
        >
          <div class="text-xl font-medium sm:text-2xl section-title">
            {{ name
            }}<span class="text-xl font-normal sm:text-2xl section-title">{{
              region
            }}</span>
          </div>
          <div class="font-medium">
            {{ date }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'date', 'region', 'route'],
}
</script>
<style scoped>
.group:hover .stretcher {
  width: 100%;
}
.stretcher {
  transition: 1s all ease-in-out;
}
</style>
