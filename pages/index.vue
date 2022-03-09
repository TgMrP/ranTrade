<template>
  <div class="text-8xl text-trade-orange">
    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api')

    return {
      data,
    }
  },
}
</script>
