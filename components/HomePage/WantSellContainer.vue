<template>
  <div class="want-sell">
    <div class="">
      <h3>
        רוצים למכור את הרכב? <br />
        מעולה. אנחנו גם קונים.
      </h3>
      <p>
        אנחנו מבינים את הקושי שבמכירת הרכב באופן עצמאי, הזמן הנדרש, המשאבים
        הנדרשים, תיאום מול קונים פוטנציאלים שלא מגיעים, ועוד… אנחנו כאן להקל
        עליכם
      </p>
      <div class="pt-8">
        <button type="button" class="s-btn">קנו ממני את הרכב שלי!</button>
      </div>
    </div>
    <div class="">
      <img
        src="@/assets/images/homepage/shutterstock-663003223.webp"
        srcset="
          @/assets/images/homepage/shutterstock-663003223@2x.webp 2x,
          @/assets/images/homepage/shutterstock-663003223@3x.webp 3x
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageWantSellContainer',
}
</script>

<style lang="scss" scoped>
.want-sell {
  @apply flex flex-col-reverse lg:flex-row justify-evenly pt-10;
  @apply px-4 lg:px-0;
  h3 {
    font-size: 40px;
    @screen lg {
      font-size: 54px;
    }
    line-height: 1;
    letter-spacing: -1.2px;
    color: #1a3142;
    @apply pt-8;
  }

  p {
    @apply pt-4;
    max-width: 500px;
    font-size: 20px;
    line-height: 1.16;
    letter-spacing: -0.5px;
    color: #707070;
  }
}
</style>
