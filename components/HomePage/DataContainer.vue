<template>
  <div class="dataContainer">
    <h1 class="text-6xl lg:text-8xl text-center">טרייד מוביל.</h1>
    <h3 class="text-4xl lg:text-6xl text-center">הבית של הרכבים בישראל.</h3>
    <div
      class="flex flex-wrap px-4 lg:px-0 items-start justify-center lg:justify-evenly py-6 w-full gap-8 lg:gap-0"
    >
      <div class="numbers">
        <h3>
          <BaseNumberAnimate
            ref="number"
            :from="0"
            :to="120108"
            easing="Power1.easeOut"
          />
        </h3>
        <p>לקוחות <br />מאז הקמת החברה</p>
      </div>
      <div class="numbers">
        <h3>
          <span id="percent">%</span>

          <BaseNumberAnimate
            ref="number0"
            :from="0"
            :to="87"
            easing="Power1.easeOut"
          />
        </h3>
        <p>לקוחות חוזרים</p>
      </div>
      <div class="numbers">
        <h3>
          <span id="percent">%</span>

          <BaseNumberAnimate
            ref="number1"
            :from="0"
            :to="85"
            easing="Power1.easeOut"
          />
        </h3>
        <p>מרכבי יד שניה<br />בבעלות פרטית קודמת</p>
      </div>
      <div class="numbers">
        <h3>
          <span id="percent">%</span>
          <BaseNumberAnimate ref="number2" :from="0" :to="90" />
        </h3>
        <p>רכבים עם פחות<br />מ - 30,000 ק״מ</p>
      </div>

      <div class="numbers">
        <h3>
          <BaseNumberAnimate ref="number3" :from="0" :to="45" />
        </h3>
        <p>מותגי רכב</p>
      </div>
    </div>
    <div class="py-4">
      <img
        src="@/assets/images/homepage/DataContainer/groupCar.webp"
        srcset="
          @/assets/images/homepage/DataContainer/groupCar@2x.webp 2x,
          @/assets/images/homepage/DataContainer/groupCar@3x.webp 3x
        "
        class="mx-auto"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageDataContainer',
}
</script>

<style lang="scss" scoped>
.dataContainer {
  @apply py-12;
  @apply bg-orange-gradient-2;

  .numbers {
    @apply text-center;

    h3 {
      font-size: 60px;
      line-height: 1.19;
      letter-spacing: -1.6px;
      color: #ff9d00;

      @screen lg {
        font-size: 80px;
      }

      span#percent {
        font-size: 30px;
        @screen lg {
          font-size: 40px;
        }
      }
    }

    p {
      font-size: 20px;
      line-height: 1.16;
      letter-spacing: -0.5px;

      color: #333;
      @screen lg {
        font-size: 25px;
      }
    }
  }
}
</style>
