<template>
  <div class="flex items-center gap-2">
    <div class="relative w-80">
      <input
        type="text"
        class="search-input"
        placeholder="חיפוש לפי מותג רכב, דגם או שנתון"
      />
      <div class="absolute top-1/2 transform -translate-y-1/2 left-5">
        <svg
          id="Group_11"
          data-name="Group 11"
          xmlns="http://www.w3.org/2000/svg"
          width="24.407"
          height="25.165"
          viewBox="0 0 24.407 25.165"
        >
          <g
            id="Ellipse_1"
            data-name="Ellipse 1"
            fill="#fff"
            stroke="#707070"
            stroke-width="1.5"
          >
            <circle cx="10.233" cy="10.233" r="10.233" stroke="none" />
            <circle cx="10.233" cy="10.233" r="9.483" fill="none" />
          </g>
          <line
            id="Line_1"
            data-name="Line 1"
            x2="6.822"
            y2="6.822"
            transform="translate(17.055 17.813)"
            fill="none"
            stroke="#707070"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </div>
    <div class="">
      <button type="button" class="s-btn">חיפוש</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarsPageSearchContainer',
}
</script>

<style lang="scss" scoped>
.search-input {
  @apply shadow border-0 p-3 w-full rounded-lg;
}
</style>
