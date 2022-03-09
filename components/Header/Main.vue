<template>
  <div>
    <header id="header">
      <IconsLogo />
      <section>
        <HeaderMenu />
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  mounted() {
    const el = window
    if (el.addEventListener)
      el.addEventListener('scroll', this.scrollEvent, false)
    else if (el.attachEvent) el.attachEvent('onscroll', this.scrollEvent)
    this.scrollEvent()
  },
  methods: {
    scrollEvent() {
      const HomePageBanner = document.getElementById('HomePageBanner')
      if (HomePageBanner) {
        const banner = HomePageBanner.getBoundingClientRect().bottom
        const header = document.getElementById('header').clientHeight
        const where = banner - header
        //  window.scrollY
        if (where < 0) {
          document.getElementById('header').classList.add('active')
        } else {
          document.getElementById('header').classList.remove('active')
        }
      } else if (window.scrollY > 1) {
        document.getElementById('header').classList.add('active')
      } else {
        document.getElementById('header').classList.remove('active')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .login {
  @apply text-trade-orange-1 hover:text-trade-orange-2;
}
::v-deep .active .login,
::v-deep .login-2 {
  @apply text-trade-blue-dark hover:text-trade-silver-1;
}
::v-deep .active {
  @apply bg-white shadow-xl py-2;
}
#header {
  @apply w-full;
  @apply px-8 py-1;
  @apply fixed top-0;
  @apply flex items-center gap-8;
  @apply z-[999];
  @apply transition-all ease-in-out;

  .section {
    @apply flex flex-1 justify-between;
  }
}
</style>
