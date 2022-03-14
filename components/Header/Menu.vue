<template>
  <div class="text-xl text-trade-silver-2">
    <ul :class="className" @click="$emit('clicked')">
      <li>
        <nuxt-link :to="{ name: 'about' }">אודות</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'branches' }">סניפים</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'best-package' }">החבילה המושלמת</nuxt-link>
      </li>
      <li>טרייד אין</li>
      <li>תיאום פגישה</li>
      <li>
        <nuxt-link :to="{ name: 'contact' }">שירות לקוחות</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'qa' }">שאלות ותשובות</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  @apply flex items-center gap-8;
}
</style>
