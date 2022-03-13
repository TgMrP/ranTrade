<template>
  <div class="testimonial">
    <h3>הלקוחות שלנו מספרים</h3>

    <client-only>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="x in 6" :key="x">
          <div class="slider">
            <div class="content">
              <div>
                סיימנו את כל הסיפור לא רק עם רכב, אלא גם עם חוויה נעימה מאד
                והחלטה ברורה שאת הקניה הבאה שלנו נתחיל בסוכנות שלכם. אשמח אם
                תמסור לבן את הערכתנו ותודתינו.
              </div>
              <div class="write-by">
                אייל והילה קולמן {{ x }}
                <br />
                (והקיה פיקנטו החדשה שלנו)
              </div>
            </div>
          </div>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'HomepageTestimonialContainer',
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.testimonial {
  h3 {
    font-size: 40px;
    @screen lg {
      font-size: 54px;
    }
    line-height: 1;
    letter-spacing: -1.2px;
    text-align: center;
    color: #1a3142;
  }

  .slider {
    @apply relative flex  justify-center pt-10;

    .content {
      max-width: 70vw;
      @screen lg {
        max-width: 470px;
      }
      font-size: 24px;
      line-height: 1.17;
      letter-spacing: -0.6px;
      text-align: center;
      color: #707070;
      @apply relative;
      @apply pb-16;

      &::before {
        content: '"';
        font-size: 240px;
        position: absolute;
        color: #ffe096;
        font-size: 160px;
        top: 12vh;
        left: -9vw;
        @screen lg {
          font-size: 240px;
          top: 0;
          left: -6vw;
        }
      }

      &::after {
        content: '"';
        position: absolute;
        color: #ffe096;
        font-size: 160px;
        top: -6vh;
        right: -10vw;

        @screen lg {
          font-size: 240px;
          top: -8vh;
          right: -6vw;
        }
      }

      .write-by {
        @apply pt-6;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.4px;
        text-align: center;
        color: #d5d5d5;
      }
    }
  }
}

::v-deep .swiper-pagination-bullet {
  background: white !important;
  border: solid 1px #707070;
  opacity: 1 !important;
}

::v-deep .swiper-pagination-bullet-active {
  background-color: #ff9d00 !important;
  border: 0 !important;
  opacity: 1 !important;
}
</style>
