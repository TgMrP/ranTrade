<template>
  <div class="footerUp">
    <div class=""><FooterBranches /></div>
    <div class=""><FooterMoked /></div>
    <div class=""><FooterForm /></div>
  </div>
</template>

<script>
export default {
  name: 'FooterUp',
}
</script>

<style lang="scss" scoped>
.footerUp {
  @apply bg-trade-silver-3;
  @apply grid grid-cols-1 lg:grid-cols-4;
  @apply lg:pt-14 lg:px-8;
  @apply gap-6 lg:gap-0;
}
</style>
