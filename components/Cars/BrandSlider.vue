<template>
  <div class="relative">
    <div
      v-if="ready && !isEnd"
      class="absolute top-1/2 transform -translate-y-1/2 -left-3 lg:-left-5 z-50 cursor-pointer"
      @click="nextSlide"
    >
      &gt;
    </div>
    <div
      v-if="ready && !isBeginning"
      class="absolute top-1/2 transform -translate-y-1/2 -right-3 lg:-right-5 z-50 cursor-pointer"
      @click="prevSlide"
    >
      &lt;
    </div>
    <client-only>
      <swiper
        ref="brandSwiper"
        class="swiper"
        :options="swiperOption"
        :delete-instance-on-destroy="true"
        :cleanup-styles-on-destroy="true"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionEnd="checkIfEnd"
      >
        <swiper-slide
          v-for="item in list"
          :key="item"
          class="slider"
          :class="{ active: proxyValue.includes(item) }"
        >
          {{ item }}
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'CarsBrandSlider',
  props: {
    list: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      ready: false,
      isEnd: true,
      isBeginning: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,

        breakpoints: {
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
            watchSlidesVisibility: true,
            freeMode: true,
          },
          1024: {
            slidesPerView: 8,
            watchSlidesVisibility: true,
            freeMode: false,
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.brandSwiper.$swiper
    },
    proxyValue: {
      get() {
        return this.value
      },
      set(n) {
        this.$emit('input', n)
      },
    },
  },

  methods: {
    checkIfEnd() {
      this.isEnd = this.swiper.isEnd
      this.isBeginning = this.swiper.isBeginning
    },
    nextSlide() {
      this.swiper.slideNext()
    },
    prevSlide() {
      this.swiper.slidePrev()
    },
    onSwiperRedied() {
      this.ready = true
      this.checkIfEnd()
    },
    onSwiperClickSlide(index) {
      const find = this.proxyValue.indexOf(this.list[index])
      if (find > -1) {
        this.proxyValue.splice(find, 1)
      } else {
        this.proxyValue.push(this.list[index])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  background-color: #f8f8f8;
  @apply text-center py-2 rounded-lg;
  @apply cursor-pointer;
  @apply hover:opacity-50;
  @apply hover:scale-105;
  &.active {
    @apply bg-trade-orange-1;
  }
}
</style>
