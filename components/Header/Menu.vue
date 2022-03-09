<template>
  <ul>
    <li>אודות</li>
    <li>סניפים</li>
    <li>החבילה המושלמת</li>
    <li>טרייד אין</li>
    <li>תיאום פגישה</li>
    <li>שירות לקוחות</li>
    <li>שאלות ותשובות</li>
  </ul>
</template>

<script>
export default {
  name: 'HeaderMenu',
}
</script>

<style lang="scss" scoped>
ul {
  @apply flex items-center gap-8;
  @apply text-xl text-trade-silver-2;
}
</style>
