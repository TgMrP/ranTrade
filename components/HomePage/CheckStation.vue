<template>
  <div class="x">
    <h4>בדרך אליכם הרכבים שלנו</h4>
    <h3>עוברים בכמה תחנות חשובות</h3>
    <div
      class="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:items-start justify-evenly pt-12 pb-8"
    >
      <div class="checkContainer">
        <img
          src="@/assets/images/homepage/test1.png"
          alt=""
          class="h-[160px] mx-auto lg:mx-0 lg:h-[208px]"
        />
        <div class="">
          <h5>בחינה של היסטוריית הטיפולים של הרכב</h5>
          <p>בודקים הכל. גם את המובן מאליו.</p>
          <p>כך תוכלו לדעת גם אתם הכל</p>
        </div>
      </div>
      <div class="checkContainer">
        <img
          src="@/assets/images/homepage/test2.png"
          alt=""
          class="h-[160px] mx-auto lg:mx-0 lg:h-[208px]"
        />
        <div class="">
          <h5>כל רכב עובר בדיקה מקיפה</h5>
          <p>כל רכב עובר בדיקה מקיפה ובהתאם</p>
          <p>לכך, לאחר מכן נכנס למרכז השירות</p>
          <p>בהתאם להמלצות המומחים שלנו</p>
        </div>
      </div>
      <div class="checkContainer">
        <img
          src="@/assets/images/homepage/test3.png"
          alt=""
          class="h-[160px] mx-auto lg:mx-0 lg:h-[208px]"
        />
        <div class="">
          <h5>בחינה של היסטוריית הטיפולים של הרכב</h5>
          <p>כל רכב נכנס למרכז השירות שלנו</p>
          <p>ומקבל את הטיפול</p>
          <p>הקפדני/המקיף/המתאים עבורו</p>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/homepage/blue-line.png"
      alt=""
      class="absolute bottom-0"
    />
  </div>
</template>

<script>
export default {
  name: 'HomepageCheckStations',
}
</script>

<style lang="scss" scoped>
.x {
  @apply relative;
  @apply pb-16 lg:pb-40;
  h4 {
    @apply text-4xl lg:text-6xl;
    line-height: 0.88;
    letter-spacing: -1.6px;
    text-align: center;
    color: #1a3142;
  }
  h3 {
    @apply text-5xl lg:text-7xl;
    line-height: 0.88;
    letter-spacing: -1.6px;
    text-align: center;
    color: #1a3142;
  }

  .checkContainer {
    h5 {
      @apply mt-4;
      font-size: 25px;
      line-height: 1.16;
      letter-spacing: -0.5px;
      text-align: center;
      color: #1a3142;
    }
    p {
      font-size: 20px;
      line-height: 1.16;
      letter-spacing: -0.5px;
      text-align: center;
      color: #707070;
    }
  }
}
</style>
