<template>
  <ul>
    <li>
      <nuxt-link :to="{ name: 'about' }">אודות</nuxt-link>
    </li>
    <li>
      <nuxt-link :to="{ name: 'branches' }">סניפים</nuxt-link>
    </li>
    <li>החבילה המושלמת</li>
    <li>טרייד אין</li>
    <li>תיאום פגישה</li>
    <li>שירות לקוחות</li>
    <li>
      <nuxt-link :to="{ name: 'qa' }">שאלות ותשובות</nuxt-link>
    </li>
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
