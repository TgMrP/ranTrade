<template>
  <div class="container mx-auto">
    <div class="text-center py-4">
      <span class="title"> שאלות תשובות </span>
      <!--  -->
      <div class="flex justify-evenly flex-nowrap items-center py-8">
        <div
          v-for="(category, i) in categories"
          :key="i"
          class="category"
          :class="{ active: i === selectedIndex }"
          @click="selectedIndex = i"
        >
          <div class="name">{{ category.name }}</div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="py-8">
      <ul>
        <li
          v-for="(item, i) in categoryItems"
          :key="`a-${i}`"
          class="first:border-t border-b cursor-pointer"
          :class="{ ' bg-trade-silver-3': item.open }"
          @click="item.open = !item.open"
        >
          <div class="flex justify-between items-center py-6">
            <div class="">
              {{ item.q }}
            </div>
            <div
              class="mx-8 cursor-pointer text-xl rounded-full border border-trade-orange-1 h-5 w-5 text-center text-trade-orange-1"
              style="line-height: 20px"
            >
              {{ item.open ? '-' : '+' }}
            </div>
          </div>
          <div v-if="item.open" class="py-6 border-t">
            {{ item.a }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QApage',
  data() {
    const categories = []
    for (let i = 0; i < 5; i++) {
      const items = []

      for (let x = 0; x < 28; x++) {
        items.push({
          q: `קטגוריה מספר ${i + 1} שאלה מספר ${x + 1}`,
          a: 'asdasd',
          open: false,
        })
      }
      categories.push({
        name: `קטגוריה ${i + 1}`,
        image: '',
        items,
      })
    }

    return {
      selectedIndex: 0,
      categories,
    }
  },
  computed: {
    selectedCategory() {
      return this.categories[this.selectedIndex]
    },
    categoryItems() {
      return this.selectedCategory &&
        this.selectedCategory.items &&
        this.selectedCategory.items.length > 0
        ? this.selectedCategory.items
        : []
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  @apply text-6xl font-bold border-b-4 border-trade-orange-1;
}

.category {
  @apply border-b py-8 w-full cursor-pointer;

  &.active {
    @apply border-trade-orange-1 border-b-4 font-bold;
  }
}
</style>
