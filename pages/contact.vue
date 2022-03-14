<template>
  <div class="container mx-auto max-w-6xl pt-4 px-4 lg:px-0">
    <h1>
      <span>שרות הלקוחות של טרייד מוביל</span>
    </h1>

    <div
      class="border border-trade-silver-2 border-opacity-60 grid lg:grid-cols-2 my-12"
    >
      <div class="bg-trade-silver-3 h-full flex flex-col justify-between">
        <div class="py-8 w-3/4 mx-auto text-trade-silver-2">
          <div class="text-2xl">
            אנחנו כאן כדי לסייע בכל עניין, שאלה או בקשה. <br />
            כתבו לנו ונציגנו ייצרו עמכם קשר בהקדם.
          </div>
          <div class="py-8">
            <div class="">שרות לקוחות 9794*</div>
            <div class="">אימייל info@trademobile.co.il</div>
          </div>
        </div>
        <div class="text-left px-4 lg:px-0">
          <img
            src="@/assets/images/footer/group-7774.svg"
            class="h-[165px] lg:h-[225px] float-left"
            alt=""
          />
        </div>
      </div>
      <div class="py-4">
        <form>
          <input type="text" placeholder="שם" />
          <input type="phone" placeholder="טלפון" />
          <input type="email" placeholder="מייל" />
          <textarea placeholder="תוכן הפניה" rows="5"></textarea>
          <div
            class="w-3/4 py-2 text-trade-silver-2 tet-sm flex items-center gap-1"
          >
            <input id="" type="checkbox" name="" /> אני מסכים לקבלת חומרים
            פרסומיים
          </div>
          <div class="w-3/4 mx-auto flex justify-end">
            <div class="">
              <button class="s-btn px-12">שלח</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style lang="scss" scoped>
form {
  @apply flex flex-col justify-center items-center w-full h-full;
  input:not([type='checkbox']) {
    @apply w-3/4 py-6;
  }

  input,
  textarea {
    @apply bg-transparent border-b border-trade-silver-2 border-opacity-60 focus:outline-none;
  }

  textarea {
    @apply resize-none w-3/4  py-6;
  }
}

h1 {
  @apply text-center text-6xl font-bold;

  span {
    @apply border-b-2 border-trade-orange-1;
  }
}
</style>
