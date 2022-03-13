<template>
  <span v-bind="$attrs" ref="number" v-on="$listeners">
    {{ tweenedNumber | number }}
  </span>
</template>

<script>
// Returns the number of full stop in given string.
const countFullstops = (str) => str.replace(/[^.]/g, '').length

function elementInViewport(el) {
  let top = el.offsetTop
  let left = el.offsetLeft
  const width = el.offsetWidth
  const height = el.offsetHeight

  while (el.offsetParent) {
    el = el.offsetParent
    top += el.offsetTop
    left += el.offsetLeft
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  )
}
export default {
  name: 'NumberAnimate',
  props: {
    from: {
      type: [Number, String],
      default: 0,
    },
    to: {
      type: [Number, String],
      required: true,
      default: 0,
    },
    format: {
      type: Function,
      default: (num) => parseInt(num),
    },
    duration: {
      type: Number,
      default: 1, // Duration of animation in seconds
    },
    easing: {
      type: String,
      default: 'Power1.easeOut',
    },
    delay: {
      type: Number,
      default: 0, // Delay the animation in seconds
    },
    animationPaused: Boolean, // Stops animation before start
  },
  data() {
    return {
      fromProp: this.from,
      done: false,
    }
  },
  computed: {
    tweenedNumber() {
      return this.format(this.fromProp)
    },
  },
  watch: {
    to(newValue) {
      this.tween(newValue)
    },
  },
  mounted() {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', this.checkV, false)
      window.addEventListener('load', this.checkV, false)
      window.addEventListener('scroll', this.checkV, false)
      window.addEventListener('resize', this.checkV, false)
    }
  },
  methods: {
    checkV(e) {
      if (this.done) {
        window.removeEventListener('scroll', this.checkV, false)
        window.removeEventListener('resize', this.checkV, false)
      }
      const el = this.$refs.number
      const start = elementInViewport(el)
      if (start) {
        this.tween(this.to)
        this.done = true
      }
    },
    tween(value) {
      const vm = this
      const tLite = this.$gsap.to(vm.$data, {
        duration: vm.duration,
        fromProp: value,
        paused: vm.animationPaused,
        ease: vm.easeCheck(),
        onStart: () => vm.$emit('start'),
        onComplete: () => vm.$emit('complete'),
        onUpdate: () => vm.$emit('update'),
        delay: vm.delay, // In seconds
      })
      vm.tween.tLite = tLite
    },
    play() {
      this.tween.tLite.play()
    },
    pause() {
      this.tween.tLite.pause()
    },
    restart() {
      this.tween.tLite.restart()
    },
    easeCheck() {
      const vm = this
      if (countFullstops(vm.easing) !== 1) {
        throw new Error('Invalid ease type. (eg. easing="Power1.easeOut")')
      }
      return vm.easing
    },
  },
}
</script>

<style lang="scss" scoped></style>
