import Vue from 'vue'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

Vue.directive('resize', {
  inserted(el, binding) {
    const onResizeCallback = binding.value
    window.addEventListener('resize', () => {
      const width = document.documentElement.clientWidth
      const height = document.documentElement.clientHeight
      onResizeCallback({ width, height })
    })
  },
})