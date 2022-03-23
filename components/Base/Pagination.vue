<template>
  <div>
    <div class="pagination-row">
      <button
        class="pagination-button"
        :disabled="pageNumber <= 1"
        @click="pageNumber -= 1"
      >
        &lt;-
      </button>
      <span v-for="(item, index) in new Array(pages)" :key="index">
        <button
          :class="[
            'pagination-button',
            pageNumber == index + 1 ? 'active' : '',
          ]"
          @click="pageNumber = index + 1"
        >
          {{ index + 1 }}
        </button>
      </span>
      <button
        class="pagination-button"
        :disabled="pageNumber >= pages"
        @click="pageNumber += 1"
      >
        -&gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemsCount: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  emits: ['update:data', 'update:page', 'update:perPage'],
  data() {
    const page =
      this.$route.query && this.$route.query.page && this.$route.query.page > 0
        ? this.$route.query.page
        : 1
    return {
      pageNumber: page,
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.itemsCount / this.perPage)
    },
    returnFiltered() {
      return this.items.slice(
        (this.pageNumber - 1) * this.perPage,
        this.pageNumber * this.perPage
      )
    },
  },
  watch: {
    items() {
      this.updateValue()
    },
    itemsCount() {
      this.updateValue()
    },
    pageNumber() {
      if (document && document.getElementById('list')) {
        const id = 'list'
        const yOffset = -100
        const element = document.getElementById(id)
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({ top: y, behavior: 'smooth' })
      }
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, page: this.pageNumber },
      })

      this.updateValue()
    },
    perPage() {
      this.updateValue()
    },
  },
  mounted() {
    this.updateValue()
  },
  methods: {
    updateValue() {
      this.$emit('update:data', this.returnFiltered)
      this.$emit('update:page', this.pageNumber)
      this.$emit('update:perPage', this.perPage)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-row {
  @apply w-full mx-auto text-center;
  .pagination-button,
  .per-page-button {
    @apply px-2 py-1 m-1 cursor-pointer rounded-lg bg-trade-silver-4 text-white;
    &.active {
      @apply bg-trade-orange-1;
      cursor: auto;
    }
    &:disabled {
      @apply bg-opacity-50;
      cursor: auto;
    }
  }
}
</style>
