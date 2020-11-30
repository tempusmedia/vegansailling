<template>
  <div>
    <div
     class="crew-container"
    >
      <h2 class="section-title font-semibold text-center pt-12">
        Meet<span class="font-light"> our crew</span>
      </h2>
    </div>
    <div style="margin-top: -610px;"">
      <SkipperCard />
      <br />
      <br />
      <CookCard />
    </div>
  </div>
</template>
<style scoped>
  .crew-container {
    height: 743px;
    background-color: #eaecf1;
    position: relative;
    z-index: -1;
  }
</style>