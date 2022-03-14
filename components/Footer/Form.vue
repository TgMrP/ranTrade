<template>
  <div class="form">
    <h3>קביעת פגישת ייעוץ</h3>
    <p>
      רוצים להיפגש באחד הסניפים שלנו ולהתקדם לרכב החדש שלכם? השאירו פרטים ונציג
      יצור עמכם קשר בהקדם
    </p>
    <form action="#">
      <div>
        <input type="text" placeholder="שם מלא" />
      </div>
      <div>
        <input type="text" placeholder="שם מלא" />
      </div>
      <div>
        <input type="text" placeholder="שם מלא" />
      </div>
      <div>
        <input type="text" placeholder="שם מלא" />
      </div>
      <div class="flex flex-col lg:flex-row justify-between pb-6">
        <div class="">
          <div class="checkbox">
            <input id="checkbox" type="checkbox" name="" />
            <label for="checkbox"><div class="box"></div></label>
            <div>מתעניינים בטרייד אין</div>
          </div>
          <div class="checkbox">
            <input id="checkbox2" checked type="checkbox" name="" />
            <label for="checkbox2"><div class="box"></div></label>
            <div>רוצים לשמוע על אפשרויות מימון</div>
          </div>
          <div class="checkbox">
            <input id="checkbox3" checked type="checkbox" name="" />
            <label for="checkbox3"><div class="box"></div></label>
            <div>מסכימ/ה לקבל חומרים פרסומיים</div>
          </div>
          <div class="checkbox">
            <input id="checkbox4" checked type="checkbox" name="" />
            <label for="checkbox4"><div class="box"></div></label>
            <div>מאשר/ת את התקנון</div>
          </div>
        </div>
        <div class="text-left pt-4 lg:pt-0">
          <button type="button" class="s-btn w-full lg:w-auto">שליחה</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FooterForm',
}
</script>

<style lang="scss" scoped>
.form {
  @apply lg:col-span-2 mx-auto text-center px-4 lg:px-0 lg:text-right;
  h3 {
    font-family: Ogen;
    font-size: 34px;
    line-height: 1.5;
    letter-spacing: -0.8px;
    color: #1a3142;
  }

  p {
    max-width: 550px;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.6px;
    color: #707070;
  }

  form {
    @apply flex flex-col gap-6 w-full;
    @apply pt-4;
    input[type='text'] {
      @apply bg-transparent border-b border-trade-silver-2 focus:outline-none w-full lg:w-56;
    }
  }

  .checkbox {
    @apply flex gap-4 items-center pb-1;
    position: relative;
    input[type='checkbox'] {
      visibility: hidden;

      &:checked + label {
        .box {
          background-color: #ff9d00;
          height: 16px;
          width: 16px;
          margin: 1px;
          border-radius: 50%;
          transform: scale(1);
        }
      }
    }
    label {
      background-color: #fff;
      border: 1px solid #333;
      border-radius: 50%;
      cursor: pointer;
      height: 20px;
      right: 0;
      position: absolute;
      top: 0;
      width: 20px;

      .box {
        height: 16px;
        width: 16px;
        transform: scale(0.1);
        transition: all 0.2s ease-in-out;
      }
    }

    div {
      font-size: 18px;
      letter-spacing: -0.4px;
      color: #333;
    }
  }
}
</style>
