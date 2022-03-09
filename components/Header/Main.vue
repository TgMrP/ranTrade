<template>
  <div>
    <header id="header" :class="{ active: active }">
      <IconsLogo />
      <section>
        <div>
          <HeaderMenu />
          <HeaderUser />
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',
  data: () => ({
    active: false,
  }),
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
      if (document.getElementById('HomePageBanner')) {
        const where =
          HomePageBanner.getBoundingClientRect().bottom -
          document.getElementById('header').clientHeight
        if (where < 0) this.active = true
        else this.active = false
      } else if (window.scrollY > 1) {
        this.active = true
      } else {
        this.active = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#header {
  &.active {
    @apply bg-white shadow-xl py-2 text-trade-blue-dark;
  }

  @apply text-trade-orange-3;
  @apply w-full;
  @apply px-8 py-1;
  @apply fixed top-0;
  @apply flex items-center gap-8;
  @apply z-[999];
  @apply transition-all ease-in-out;

  section {
    @apply flex flex-1 justify-between;

    div:first-child {
      @apply flex justify-between items-center w-full;
    }
  }
}
</style>
