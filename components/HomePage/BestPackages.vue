<template>
  <div class="relative pb-16 lg:pb-40">
    <div class="title">
      <h2>סידרנו לכם את החבילה המושלמת</h2>
      <h2>לקניה ומכירה של רכבים</h2>
    </div>
    <div class="best-package">
      <div class="item flex flex-col justify-between lg:h-[220px]">
        <div class="">
          <div class="pb-4">
            <img
              src="@/assets/images/homepage/best-package/7770.svg"
              alt=""
              class="mx-auto lg:mx-0 lg:pr-10"
            />
          </div>
          <h3>אחריות מורחבת</h3>
          <p>לכל רכב בטרייד מוביל אחריות</p>
          <p>בסיסית ואפשרות לאחריות פרימיום</p>
        </div>
        <div class="read-more">קראו עוד >></div>
      </div>
      <!--  -->
      <div class="item">
        <div class="pb-4">
          <img
            src="@/assets/images/homepage/best-package/7771.svg"
            alt=""
            class="mx-auto lg:mx-0 lg:pr-10"
          />
        </div>
        <h3>תנאי מימון מעולים</h3>
        <p>פשוט לבחור את הרכב שתמיד</p>
        <p>חלמתם עליו-בתנאים מעולים של</p>
        <p>עד 100% מימון</p>
        <div class="read-more">קראו עוד >></div>
      </div>
      <!--  -->
      <div class="item">
        <div class="pb-4">
          <img
            src="@/assets/images/homepage/best-package/7769.svg"
            alt=""
            class="mx-auto lg:mx-0 lg:pr-16"
          />
        </div>
        <h3>הטבות ייחודיות בביטוח</h3>
        <p>בטוח עם טרייד מוביל. הטבות</p>
        <p>ייחודיות במסלולי הביטוח החובה</p>
        <p>והמקיף רק ללקוחות טרייד מוביל</p>
        <div class="read-more">קראו עוד >></div>
      </div>
      <!--  -->
      <div class="item">
        <div class="pb-4">
          <img
            src="@/assets/images/homepage/best-package/cars.svg"
            alt=""
            class="mx-auto lg:mx-0 lg:pr-10"
          />
        </div>
        <h3>מגוון רחב של רכבים</h3>
        <p>משפחת הרכבים הגדולה בישראל</p>
        <p>מזמינה אתכם לבחור ממגוון עצום</p>
        <p>של דגמים ורכבים - חדשים</p>
        <p>ומבעלות קודמת</p>
        <div class="read-more">קראו עוד >></div>
      </div>
      <!--  -->
      <div class="item">
        <div class="pb-4">
          <img
            src="@/assets/images/homepage/best-package/7773.svg"
            alt=""
            class="mx-auto lg:mx-0 lg:pr-16"
          />
        </div>
        <h3>אינספור חוויות ייחודיות</h3>
        <p>כשמצטרפים למשפחת טרייד מוביל</p>
        <p>נהנים משלל חוויות</p>
        <p>והטבות במהלך השנה.</p>
        <p>הכיף? עלינו</p>
        <div class="read-more">קראו עוד >></div>
      </div>
    </div>
    <img
      src="@/assets/images/homepage/silver-line.png"
      alt=""
      class="absolute bottom-0"
    />
  </div>
</template>

<script>
export default {
  name: 'HomepageBestPackageContainer',
}
</script>

<style lang="scss" scoped>
.title {
  @apply pb-12 pt-12 lg:pt-0;
  h2 {
    font-size: 30px;
    @screen lg {
      font-size: 54px;
    }
    line-height: 1.08;
    letter-spacing: -1.2px;
    text-align: center;
    color: #101c24;
  }
}
.best-package {
  @apply flex flex-wrap justify-center gap-x-32 gap-y-20 container mx-auto;
  @apply text-center lg:text-right;

  @screen lg {
    width: 1400px;
  }

  .item {
    position: relative;
    width: 100%;

    @screen lg {
      width: 25%;
    }

    h3 {
      font-size: 30px;
      line-height: 1.2;
      letter-spacing: -0.7px;
      color: #000;
    }

    p {
      font-size: 20px;
      line-height: 1.16;
      letter-spacing: -0.5px;
      color: #707070;
    }

    .read-more {
      @apply pt-3;
      font-size: 20px;
      line-height: 1.16;
      letter-spacing: -0.5px;
      color: #ff9d00;
    }
    @screen lg {
      &:not(:nth-child(3)):not(:nth-child(5))::after {
        content: '';
        border: 1px solid;
        height: 118px;
        position: absolute;
        bottom: 18%;
        transform: skew(-20deg);
        color: #ff9d00;
        left: -20px;
      }
    }
  }
}
</style>
