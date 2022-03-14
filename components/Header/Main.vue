<template>
  <div>
    <header id="header" :class="{ active: active }">
      <IconsLogo />
      <!-- MobileMenu -->
      <div
        v-if="isMobile"
        v-click-outside="() => (isOpen = false)"
        class="flex-1 w-full flex justify-end lg:hidden"
      >
        <div class="flex items-center">
          <div
            class="hamburger z-[9998]"
            :class="isOpen ? 'hamburger--is-open' : ''"
            @click="isOpen = !isOpen"
          >
            <div class="hamburger__item hamburger__item--first"></div>
            <div class="hamburger__item hamburger__item--middle"></div>
            <div class="hamburger__item hamburger__item--last"></div>
          </div>
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
    active: false,
    isOpen: false,
    isMobile: false,
  }),
  mounted() {
    const el = window
    if (el.addEventListener)
      el.addEventListener('scroll', this.scrollEvent, false)
    else if (el.attachEvent) el.attachEvent('onscroll', this.scrollEvent)
    this.scrollEvent()
    this.detectMob()
  },
  methods: {
    detectMob() {
      this.isMobile = window.innerWidth < 1024
    },
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
    @apply hidden lg:flex flex-1 justify-between;

    div:first-child {
      @apply flex justify-between items-center w-full;
    }
  }
}

.hamburger {
  @apply w-9 h-9;
  @apply flex flex-col justify-between gap-1;
  &:hover {
    cursor: pointer;
  }
  &__item {
    @apply bg-trade-blue-dark;
    height: 16px;
    width: 100%;
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      opacity 300ms linear;
    &--first {
      .hamburger--is-open & {
        @apply translate-y-3 rotate-45;
      }
    }
    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }
    &--last {
      .hamburger--is-open & {
        @apply -translate-y-4 -rotate-45;
      }
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
