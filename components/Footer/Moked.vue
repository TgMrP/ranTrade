<template>
  <div class="moked">
    <div class="">
      <div class="">
        <h3>מוקד טרייד מוביל</h3>
      </div>
      <div class="phone relative">
        <div>9494</div>
        <div class="k">*</div>
      </div>
      <div class="call-now">
        <div class="flex gap-4 items-center">
          <div class="">חייגו עכשיו</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32.61" height="26.299">
            <g>
              <g fill="#ff9d00" stroke="#ff9d00" stroke-width=".5">
                <path
                  d="M2.689 22.782A2.444 2.444 0 0 1 .25 20.343v-5.126a2.439 2.439 0 1 1 4.878 0v5.126a2.44 2.44 0 0 1-2.439 2.439m0-9.045a1.483 1.483 0 0 0-1.48 1.48v5.126a1.48 1.48 0 1 0 2.961 0v-5.126a1.483 1.483 0 0 0-1.481-1.48Z"
                />
                <path
                  d="M29.921 22.782a2.444 2.444 0 0 1-2.439-2.439v-5.126a2.439 2.439 0 1 1 4.878 0v5.126a2.444 2.444 0 0 1-2.439 2.439m0-9.045a1.483 1.483 0 0 0-1.48 1.48v5.126a1.48 1.48 0 1 0 2.961 0v-5.126a1.483 1.483 0 0 0-1.481-1.48Z"
                />
                <path
                  d="M29.998 13.684a.5.5 0 0 1-.517-.476c0-6.73-5.789-12-13.172-12s-13.172 5.269-13.172 12a.519.519 0 0 1-1.035 0C2.102 5.943 8.345.25 16.308.25s14.2 5.693 14.2 12.958a.5.5 0 0 1-.51.476"
                />
                <path
                  d="M28.858 24.164h-7.075a.48.48 0 1 1 0-.959h7.076a.8.8 0 0 0 .73-.776.482.482 0 0 1 .483-.483.476.476 0 0 1 .476.483 1.756 1.756 0 0 1-1.689 1.735"
                />
                <path
                  d="M19.087 26.049h-4.252a2.119 2.119 0 0 1-2.119-2.12v-.489a2.119 2.119 0 0 1 2.119-2.12h4.252a2.119 2.119 0 0 1 2.119 2.12v.489a2.119 2.119 0 0 1-2.119 2.12m-4.252-3.769a1.163 1.163 0 0 0-1.161 1.161v.489a1.163 1.163 0 0 0 1.161 1.161h4.252a1.163 1.163 0 0 0 1.161-1.161v-.489a1.163 1.163 0 0 0-1.161-1.161Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="whatsapp">
        <svg xmlns="http://www.w3.org/2000/svg" width="37.975" height="38.056">
          <g data-name="Group 350" fill="#b4b2b2" fill-rule="evenodd">
            <path
              data-name="Path 420"
              d="M31.817 4.989A18.99 18.99 0 0 1 9.609 35.501l-1.5.472-6.6 2.08 1.5-6.759.34-1.532A18.99 18.99 0 0 1 31.816 4.987Zm3.412 14.959c0-.036 0-.072.007-.108s0-.1.006-.149c0-.087.008-.173.01-.26v-.804c0-.072 0-.154-.007-.231 0-.052 0-.1-.006-.157 0-.095-.01-.189-.016-.283 0-.032 0-.064-.006-.1q-.012-.169-.027-.337v-.033A16.306 16.306 0 1 0 5.909 28.773l-.016.07-.392 1.774-.127.574-.773 3.5 3.416-1.074 1.14-.358 1.234-.388A16.306 16.306 0 0 0 35.23 19.952Z"
            />
            <path
              data-name="Path 421"
              d="M11.065 11.174a4.742 4.742 0 0 0-1.042 3.627c-.508 5.514 7.818 14.164 13.258 13.639a4.511 4.511 0 0 0 4.344-1.95 2.129 2.129 0 0 0 .225-1.906c-.447-.889-3.392-1.861-4.355-2.253-.57-.232-1.85.617-2.2 1.087s-.964.142-.964.142a20.95 20.95 0 0 1-5.6-6.178s-.268-.641.234-.947 1.47-1.5 1.294-2.09-1.582-4.333-1.582-4.333-.479-.808-2.159-.182a5.376 5.376 0 0 0-1.453 1.344Z"
            />
          </g>
        </svg>
        <div class="">בקרוב - ווטסאפ</div>
      </div>
    </div>
    <div class="">
      <img
        src="@/assets/images/footer/group-7774.svg"
        class="h-[225px]"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMoked',
}
</script>

<style lang="scss" scoped>
.moked {
  @apply flex flex-col justify-between h-full items-center lg:items-start;

  h3 {
    font-size: 34px;
    line-height: 1.5;
    letter-spacing: -0.8px;
    color: #333;
  }

  .call-now {
    @apply -mt-4 pb-4;
    @apply underline;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.6px;
    color: #ff9d00;
  }

  .whatsapp {
    @apply flex gap-4 items-center;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.6px;
    color: #b4b2b2;
  }

  .phone {
    font-size: 64px;
    line-height: 1.17;
    letter-spacing: -1.4px;

    @apply -mt-4;

    .k {
      @apply absolute left-[23%] top-[18%];
    }
  }
}
</style>
