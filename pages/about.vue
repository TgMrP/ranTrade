<template>
  <div>
    <div class="bg-orange-gradient-2">
      <div class="py-20"></div>
    </div>
    <div class="container mx-auto grid grid-cols-2 gap-20">
      <div class="">
        <h1><span>אודות</span></h1>
        <div class="pt-10">
          <h2>
            אנחנו כאן כדי לעזור לך <br />
            למצוא את הרכב הבא שלך
          </h2>
        </div>
        <p>
          ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה.
          לפמעט מוסן מנת. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי
          מנורך. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
          נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים
          תוק, הדש שנרא התידם הכייר וקלורם איפסום דולור סיט אמט, קונסקטורר
          אדיפיסינג אלית קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
          לפריקך תצטריק לרטי. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי
          במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף
          סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
          ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
          מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. הועניב
          היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה
          מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם
          הכייר ו
        </p>
      </div>
      <div class="">
        <img
          src="/images/about/about.webp"
          srcset="
            /images/about/about.webp@2x.webp 2x,
            /images/about/about.webp@3x.webp 3x
          "
          alt="b"
        />
      </div>
    </div>
    <HomePageBestPackages
      title="היתרונות שלנו על פני המתחרים"
      class="py-40"
      :show-bottom="false"
    />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-6xl font-bold;
  @apply text-trade-blue-dark;
  span {
    @apply border-b-2 border-trade-orange-1;
  }
}

h2 {
  @apply text-5xl font-bold;
  @apply text-trade-blue-dark;
}
</style>
