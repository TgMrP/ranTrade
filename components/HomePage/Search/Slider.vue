<template>
  <div class="lg:flex lg:flex-row items-center gap-4">
    <p>{{ name }}</p>
    <div class="lg:flex-1 overflow-x-hidden relative">
      <client-only>
        <swiper
          class="m-4"
          :options="swiperOption"
          :auto-update="true"
          :auto-destroy="true"
          :delete-instance-on-destroy="true"
          :cleanup-styles-on-destroy="true"
        >
          <swiper-slide v-for="(x, i) in data" :key="i">
            <div :class="x.type">
              <template v-if="x.type === 'image'">
                <img v-if="x.image" :src="x.image" :alt="x.name" class="" />
                <span> {{ x.name }}</span>
              </template>
              <template v-else-if="x.type === 'text'">
                <div class="prefix">{{ prefix }}</div>
                <div class="name">{{ x.name }}</div>
                <div v-if="suffix" class="suffix">{{ suffix }}</div>
              </template>
              <template v-else-if="x.type === 'centerText'">
                <div class="con" :class="{ [x.background]: x.background }">
                  <div v-if="x.subtitle" class="subtitle">{{ x.subtitle }}</div>
                  <div v-if="x.title" class="title">{{ x.title }}</div>
                </div>
              </template>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageSearchSliderComponent',
  props: {
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
        {
          name: `פיג׳ו`,
          image: 'https://img.auto-che.com/logo/qlm/peugeot.png',
          type: 'image',
        },
      ],
    },
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      freeMode: true,

      breakpoints: {
        480: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          freeMode: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
          watchSlidesVisibility: true,
          freeMode: true,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          watchSlidesVisibility: true,
          freeMode: false,
        },
      },
    },
  }),
}
</script>

<style lang="scss" scoped>
p {
  @apply text-5xl text-trade-blue-dark;
  @apply text-center lg:text-right;
  @apply max-w-[160px];
}

.swiper-slide {
  .image {
    @apply flex items-center justify-center;
    @apply h-[200px];
    @apply rounded-xl;
    @apply opacity-100;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);

    span {
      @apply absolute bottom-3 right-5;
      @apply text-xl text-right text-trade-silver-4;
    }

    img {
      height: 100px;
      @apply object-contain;
    }
  }

  .centerText {
    .con {
      @apply px-5 h-full flex mx-auto flex-col items-center justify-center;
      @apply h-[200px];
      @apply rounded-xl;
      @apply opacity-100;
      @apply text-white;
      .subtitle {
        @apply text-6xl font-bold;
      }
      .title {
        @apply text-8xl leading-[50px] font-bold;
      }
    }
  }

  .text {
    @apply px-5 h-full flex mx-auto flex-col items-center justify-center;
    @apply h-[200px];
    @apply rounded-xl;
    @apply opacity-100;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
    background: linear-gradient(
      48deg,
      rgba(255, 255, 255, 0.74) 24%,
      rgba(213, 213, 213, 1) 100%
    );

    .prefix {
      @apply w-full text-right;
      @apply text-trade-orange-1 text-3xl font-light;
    }
    .suffix {
      @apply w-full text-left;
      @apply text-trade-orange-1 text-3xl font-light;
    }
    .name {
      @apply text-8xl font-black text-trade-blue-dark;
      line-height: 0.7;
    }
  }
}

/* if 1 slide */
@media (max-width: 480px) {
  .swiper-slide-next {
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
}

/* if 3 slides */
@media (min-width: 480px) and (max-width: 1028px) {
  .swiper-slide-next + .swiper-slide {
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
}

/* if 5 slides */
@media (min-width: 1028px) {
  .swiper-slide-next + .swiper-slide + .swiper-slide {
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
}

.swiper-slide:last-child {
  opacity: 1 !important;
  -webkit-mask-image: unset !important;
}
</style>
