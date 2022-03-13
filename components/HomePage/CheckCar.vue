<template>
  <div class="grid lg:grid-cols-2 gap-10">
    <div class="lg:w-[50vw]">
      <img
        src="@/assets/images/homepage/white-car.png"
        alt=""
        class="mx-auto lg:mx-0"
      />
    </div>
    <div class="z-0 lg:pt-[10vh] text-center lg:text-right px-4 lg:px-0">
      <div class="title">
        לדעת את כל מה שחשוב. <br />
        עוד לפני שקניתם.
      </div>
      <div class="desc">
        אנחנו מבינים שקניית רכב זה דבר מורכב ומסובך ומאמינים שהדרך לקניה מוצלחת
        מתחילה באמינות. לכן, אנחנו מציגים בשקיפות מלאה את המצב של כל רכב במלאי
        שלנו. יש לכם שאלה? רוצים לדעת עוד? תרגישו חופשי לדבר איתנו מתי שתרצו
      </div>
      <div class="pt-4 pb-4 lg:pb-0">
        <button type="button" class="s-btn text-lg">לשיחה עם נציג</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageCheckCarContainer',
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  line-height: 1;
  letter-spacing: -1.2px;
  color: #000;
  @screen lg {
    font-size: 50px;
  }
}
.desc {
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: -0.5px;
  color: #707070;
  max-width: 679px;
  @apply py-2 mx-auto lg:mx-0;
  @screen lg {
    font-size: 22px;
  }
}
</style>
