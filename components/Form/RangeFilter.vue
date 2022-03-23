<template>
  <div>
    <div class="title">
      <div
        class="flex justify-between cursor-pointer"
        @click="menuOpen = !menuOpen"
      >
        <div class="">{{ name }}</div>
        <div v-if="!menuOpen" class="menuOpenBtn">+</div>
        <div v-if="menuOpen" class="menuOpenBtn">-</div>
      </div>
    </div>
    <div v-if="menuOpen" class="pt-16 pb-8">
      <Slider
        v-model="proxyValue"
        class="px-4"
        :min="min"
        :max="max"
        :step="step"
        :format="{
          decimals: 0,
          thousand: ',',
          ...format,
        }"
        :classes="{
          target:
            'relative box-border select-none touch-none tap-highlight-transparent touch-callout-none disabled:cursor-not-allowed',
          focused: 'slider-focused',
          tooltipFocus: 'slider-tooltip-focus',
          tooltipDrag: 'slider-tooltip-drag',
          rtl: 'slider-rtl',
          horizontal: 'slider-horizontal h-1.5',
          vertical: 'slider-vertical w-1.5 h-80',
          textDirectionRtl: 'slider-txt-rtl',
          textDirectionLtr: 'slider-txt-ltr',
          base: 'w-full h-full relative z-1 bg-trade-silver-2 rounded',
          connects: 'w-full h-full relative overflow-hidden z-0 rounded',
          connect:
            'absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full bg-trade-orange-1 cursor-pointer tap:duration-300 tap:transition-transform disabled:bg-gray-400 disabled:cursor-not-allowed',
          origin:
            'slider-origin absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full h:h-0 v:-top-full txt-rtl-h:left-0 txt-rtl-h:right-auto v:w-0 tap:duration-300 tap:transition-transform',
          handle:
            'absolute rounded-full bg-trade-orange-1 border-2 border-white shadow-slider cursor-grab focus:outline-none h:w-4 h:h-4 h:-top-1.5 h:-right-2 txt-rtl-h:-left-2 txt-rtl-h:right-auto v:w-4 v:h-4 v:-top-2 v:-right-1.25 disabled:cursor-not-allowed focus:ring focus:ring-trade-orange-1 focus:ring-opacity-30',
          touchArea: 'h-full w-full',
          tooltip:
            'absolute block text-sm font-semibold whitespace-nowrap py-1 px-1.5 min-w-5 text-center text-white rounded border border-trade-orange-1 bg-trade-orange-1 transform h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 disabled:bg-gray-400 disabled:border-gray-400 merge-h:translate-x-1/2 merge-h:left-auto merge-v:-translate-x-4 merge-v:top-auto tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block',
          tooltipTop: 'bottom-6 h:arrow-bottom merge-h:bottom-3.5',
          tooltipBottom: 'top-6 h:arrow-top merge-h:top-5',
          tooltipLeft: 'right-6 v:arrow-right merge-v:right-1',
          tooltipRight: 'left-6 v:arrow-left merge-v:left-7',
          tooltipHidden: 'slider-tooltip-hidden',
          active: 'slider-active shadow-slider-active cursor-grabbing',
          draggable: 'cursor-ew-resize v:cursor-ns-resize',
          tap: 'slider-state-tap',
          drag: 'slider-state-drag',
        }"
      />
      <div class="flex justify-between pt-4">
        <div class="text-trade-gray-dark">{{ maxFilter }}</div>
        <div class="text-trade-gray-dark">{{ minFilter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@vueform/slider/dist/slider.vue2'

export default {
  name: 'CarsPageRangeFilter',
  components: { Slider },
  props: {
    name: {
      type: String,
      default: '',
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    filter: {
      type: String,
      default: null,
    },
    max: {
      type: Number,
      default: 150000,
    },
    value: {
      type: Array,
      required: true,
    },
    format: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    proxyValue: {
      get() {
        return this.value
      },
      set(n) {
        this.$emit('input', n)
      },
    },
    minFilter() {
      if (this.filter) {
        return this.$options.filters[this.filter](this.min)
      }
      return this.min
    },
    maxFilter() {
      if (this.filter) {
        return this.$options.filters[this.filter](this.max)
      }
      return this.max
    },
  },
}
</script>

<style lang="scss" scoped>
.menuOpenBtn {
  @apply cursor-pointer text-xl rounded-full border border-trade-orange-1 h-5 w-5 text-center text-trade-orange-1;
  line-height: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
