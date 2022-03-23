<template>
  <div>
    <!--  -->
    <div class="bg-trade-silver">
      <div class="container mx-auto pt-8 px-4 lg:px-0">
        <CarsSearchContainer />
      </div>
    </div>
    <!--  -->
    <div class="container mx-auto px-6 lg:px-0 py-8">
      <!--  -->
      <CarsBrandSlider
        v-model="dataFilters.mnfctr"
        :list="filters.find((x) => x.key === 'mnfctr').data"
      />
      <!--  -->
      <div class="flex gap-8 py-8">
        <!-- SideBar -->
        <div class="menu">
          <div class="myBorder title pb-4 font-bold text-lg">סינון לפי</div>
          <!-- Range Year -->
          <div
            v-for="(filter, i) in filters"
            :key="`filter-${i}`"
            class="myBorder py-4"
          >
            <FormRangeFilter
              v-if="filter.type === 'slider'"
              v-model="dataFilters[filter.key]"
              :name="filter.name"
              :min="filter.min"
              :max="filter.max"
              :format="filter.format || {}"
            />
            <FormTypeFilter
              v-else-if="filter.type === 'list'"
              v-model="dataFilters[filter.key]"
              :name="filter.name"
              :list="filter.data"
            />
          </div>
        </div>
        <!-- Main -->
        <div class="flex-1">
          <div
            v-if="cars.length > 0"
            id="list"
            class="pt-4 grid lg:grid-cols-3 gap-8"
          >
            <CarCard
              v-for="(car, i) in cars"
              :key="`car-${car._id}-${i}`"
              :car="car"
            />
          </div>

          <BasePagination
            v-show="data.length > 0"
            :data.sync="cars"
            :page.sync="page"
            :per-page.sync="perPage"
            :items="data"
            :items-count="data.length"
            class="pt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarsPage',
  async asyncData({ $axios, route }) {
    const data = await $axios.$get('/api/cars')
    const cars = data.success ? data.cars : []

    const page = 1
    const perPage = data && data.perPage && data.perPage > 0 ? data.perPage : 39

    const dataFilters = {}
    data.filters.forEach((x) => {
      dataFilters[x.key] = x.value
    })

    return {
      cars: [],
      data: cars,
      filters: data.filters,
      dataFilters, // : { ...dataFilters },
      page,
      perPage,
    }
  },
  // data: () => ({
  //   filters: {
  //     year: [1989, 2022],
  //   },
  // }),
}
</script>

<style lang="scss" scoped>
.carsNotFound {
  font-weight: bold;
  line-height: 0.8;
  letter-spacing: -1px;
  color: #1a3142;
  background-color: #f8f8f8;
  height: 250px;
  @apply mt-4 flex w-full items-center justify-center text-3xl lg:text-5xl;
}
.myBorder {
  @apply border-b;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 270px;
  z-index: 9999;
  transform: translateX(200%);
  transition: all 0.3s ease-in-out;
  padding-top: 20px;

  &.active {
    transform: translateX(0);
    @apply shadow-xl px-4 overflow-auto;
  }

  @screen lg {
    position: unset;
    top: unset;
    right: unset;
    bottom: unset;
    background-color: unset;
    z-index: unset;
    transition: all 0.3s ease-in-out;
    padding-top: unset;
    transform: translateX(0);
    @apply w-2/12;
  }
}
</style>
