<template>
  <nuxt-link :to="{ name: 'index' }">
    <img
      src="@/assets/images/logo.png"
      alt="Trade Mobile"
      class="h-10 lg:h-14"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoComponent',
}
</script>

<style scoped></style>
