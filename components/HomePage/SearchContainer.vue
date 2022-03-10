<template>
  <div class="container mx-auto">
    <div class="search">
      <input type="search" placeholder="חיפוש לפי מותג רכב, דגם או שנתון" />
      <IconsSearch />
    </div>
    <HomePageSearchSlider name="חיפוש לפי מותג" />
    <HomePageSearchSlider
      name="או לפי תקציב"
      :data="byPrice"
      prefix="עד"
      suffix="ש״ח"
    />
    <HomePageSearchSlider name="עזבו, לפי קטגוריה" :data="byCategory" />
  </div>
</template>

<script>
export default {
  name: 'SearchContainerComponent',
  data: () => ({
    byPrice: [
      { type: 'text', name: '40,000' },
      { type: 'text', name: '60,000' },
      { type: 'text', name: '80,000' },
      { type: 'text', name: '100,000' },
      { type: 'text', name: '120,000' },
      { type: 'text', name: '140,000' },
      { type: 'text', name: '180,000' },
      { type: 'text', name: '200,000' },
    ],
    byCategory: [
      {
        type: 'centerText',
        subtitle: 'המבצעים',
        title: 'החמים',
        background: 'bg-trade-orange-2',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.search {
  @apply relative w-80;

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input[type='search'] {
    @apply shadow border-0 p-3 w-full rounded-lg;
  }

  svg {
    @apply absolute top-1/2 transform -translate-y-1/2 left-5 h-5;
  }
}
</style>
