<template>
  <div>
    <header
      id="header"
      :class="{ '!text-trade-blue-dark': notHomePageBanner, active: active }"
    >
      <IconsLogo />
      <!-- MobileMenu -->
      <div
        v-if="isMobile"
        v-click-outside="() => (isOpen = false)"
        class="flex-1 w-full flex justify-end lg:hidden"
      >
        <div class="flex items-center z-[9998]">
          <HeaderHamburger :open="isOpen" @click.native="isOpen = !isOpen" />
        </div>

        <transition name="slide">
          <div
            v-if="isOpen"
            class="fixed inset-0 z-[9997] bg-white bg-opacity-80"
          />
        </transition>

        <transition name="slide">
          <div
            v-if="isOpen"
            class="fixed top-0 bottom-0 right-0 bg-trade-blue-dark-2 bg-opacity-80 z-[9999] shadow-lg w-full max-w-[240px] py-8"
          >
            <HeaderMenu
              class-name="flex-col text-trade-orange-1"
              @clicked="isOpen = false"
            />
          </div>
        </transition>
      </div>
      <!-- Regular Menu -->
      <section v-else>
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
    notHomePageBanner: false,
    active: false,
    isOpen: false,
    isMobile: false,
  }),

  mounted() {
    const el = window
    if (el.addEventListener) {
      el.addEventListener('scroll', this.scrollEvent, false)
      el.addEventListener('resize', this.detectMob, false)
    } else if (el.attachEvent) {
      el.attachEvent('onscroll', this.scrollEvent)
      el.attachEvent('resize', this.detectMob)
    }
    this.scrollEvent()
    this.detectMob()
  },
  beforeDestroy() {
    const el = window
    if (el.addEventListener) {
      el.removeEventListener('scroll', this.scrollEvent, false)
      el.removeEventListener('resize', this.detectMob, false)
    } else if (el.detachEvent) {
      el.detachEvent('onscroll', this.scrollEvent)
      el.detachEvent('resize', this.detectMob)
    }
  },
  methods: {
    detectMob() {
      this.isMobile = window.innerWidth < 1024
    },
    scrollEvent() {
      const HomePageBanner = document.getElementById('HomePageBanner')
      if (!HomePageBanner) {
        this.notHomePageBanner = true
      }
      if (HomePageBanner) {
        this.notHomePageBanner = false
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
    @apply hidden lg:flex flex-1 justify-between;

    div:first-child {
      @apply flex justify-between items-center w-full;
    }
  }
}

.slide-leave-active,
.slide-enter-active {
  transition: 400ms;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(200%, 0);
}
</style>
