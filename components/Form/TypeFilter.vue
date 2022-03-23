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
    <transition name="slide">
      <ul v-if="menuOpen">
        <li
          v-for="item in list"
          :key="item"
          :class="{ 'font-bold text-gray-900': proxyValue.includes(item) }"
          @click="clickItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CarsPageFilters',
  props: {
    name: {
      type: String,
      default: '',
    },
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
  },
  methods: {
    clickItem(item) {
      const find = this.proxyValue.indexOf(item)
      if (find > -1) {
        this.proxyValue.splice(find, 1)
      } else {
        this.proxyValue.push(item)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.menuOpenBtn {
  @apply cursor-pointer text-xl rounded-full border border-trade-orange-1 h-5 w-5 text-center text-trade-orange-1;
  line-height: 20px;
}
ul {
  cursor: pointer;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
