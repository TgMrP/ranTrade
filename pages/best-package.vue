<template>
  <div>
    <div class="bg-orange-gradient-2 pt-40">
      <div class="container mx-auto">
        <h1>
          החבילה המושלמת <br />
          של טרייד מוביל
        </h1>
      </div>
    </div>
    <div class="container mx-auto">
      <h4>לצאת עם הרבה יותר מרכב</h4>
      <div
        v-for="(block, i) in blocks"
        :key="i"
        class="content-flex"
        :class="{ 'flex-row-reverse': i % 2 !== 0 }"
      >
        <div class="text">
          <div class="title">
            <h3>
              <span>
                {{ block.title }}
              </span>
            </h3>
            <img :src="block.icon" alt="" />
          </div>
          <p>
            {{ block.description }}
          </p>
        </div>
        <div class="image">
          <img :src="block.image" :srcset="block.srcset" :alt="block.title" />
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestPackagePage',
  data: () => ({
    blocks: [
      {
        title: 'אחריות מורחבת',
        icon: require('@/assets/images/homepage/best-package/7770.svg'),
        image: '/images/best-package/ExtendedWarranty.webp',
        srcset: `/images/best-package/ExtendedWarranty@2x.webp 2x,
              /images/best-package/ExtendedWarranty@3x.webp 3x`,
        description: `כל לקוח שלנו מקבל אפשרות לאחריות הכוללת מנוע, גיר ואבזור מיוחדהטפול הראשון לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.`,
      },
      {
        title: 'מימון אטרקטיבי',
        icon: require('@/assets/images/homepage/best-package/7771.svg'),
        image: '/images/best-package/Funding.webp',
        srcset: `/images/best-package/Funding@2x.webp 2x,
              /images/best-package/Funding@3x.webp 3x`,
        description: `עוזרים לכם להגיע לרכב שחלמתם עליו - עד 90% מימון ללא ערבות לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס. `,
      },
      {
        title: 'הטבה בביטוח',
        icon: require('@/assets/images/homepage/best-package/7769.svg'),
        image: '/images/best-package/Insurance.webp',
        srcset: `/images/best-package/Insurance@2x.webp 2x,
              /images/best-package/Insurance@3x.webp 3x`,
        description: `אנחנו עובדים עם סוכנויות הביטוח המובילות כך שתוכלו להיות בראש שקט. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.`,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-6xl font-bold;
  @apply text-trade-blue-dark;
}

h4 {
  @apply font-light;
  @apply text-5xl;
  @apply text-trade-silver-2;
}

.content-flex {
  @apply flex justify-between gap-20 py-20;

  .text {
    @apply w-4/12;
    .title {
      @apply flex gap-8;
      h3 {
        @apply font-bold text-5xl;
        span {
          @apply border-b-2 border-trade-orange-1;
        }
      }
      img {
        @apply h-14;
      }
    }
  }

  .image {
    @apply flex-1;
  }

  p {
    @apply py-4;
    @apply text-2xl;
    @apply max-w-xl;
  }
}
</style>
