<template>
  <div class="box" :class="{ mini: mini }">
    <img src="https://trademobile.tk/_nuxt/img/empty-car.c8c7dc4.png" alt="" />
    <div class="line mx-auto" />
    <div class="name">
      <div>{{ car.Mnfctr }}</div>
      <div>-</div>
      <div>{{ car.ItemName }}</div>
      <div>|</div>
      <div>{{ car.Year }}</div>
    </div>
    <div class="moreData">
      <div class="segment">
        {{
          car.GovData && car.GovData.ramat_gimur ? car.GovData.ramat_gimur : ''
        }}
      </div>
      <div class="km">{{ car.KM | number }} ק"מ</div>
    </div>

    <div class="typeCards">
      <div class="" :class="{ 'opacity-50': car.Hand > 1 }">
        <IconsCarFirstHand class="h-5" />
        יד ראשונה
      </div>
      <div class="" :class="{ 'opacity-50': car.Hand > 1 }">
        <IconsCarPrivetOwner class="h-5" />
        בעלות פרטית
      </div>
      <div class="" :class="{ 'opacity-50': car.Hand > 1 }">
        <IconsCarKM class="h-5" />
        קילומטראז נמוך
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    mini: {
      type: Boolean,
      default: false,
    },
    car: {
      type: Object,
      default: () => ({
        _id: '621771b71ac9310366d1ae28',
        ItemCode: '34-114-54',
        ItemName: 'סיטיגו / Citigo',
        Mnfctr: 'סקודה',
        Year: 2015,
        Hand: 1,
        Gear: 'ידני',
        Color: 'כסף',
        EngineCC: 999,
        U_EngnType: null,
        EnginType: 34,
        KM: 87204,
        OriginOwner: 'פרטי',
        PrevOnwer: 'פרטי',
        ManagerPrice: 27551.25,
        Notes:
          'רמת גימור: ELEGANCE,  , כ"ס:  60, הגה כח  ,כריות אויר:6, בקרת יציבות,ABS',
        Place: 7,
        SegmentGroup: 2,
        Segment: 'מיני',
        Pictures: [],
        Seats: 5,
        Doors: 5,
        TypeCar: {
          _id: '621771b41ac9310366d1ac2b',
          id: 35505,
          sug_degem: 'P',
          tozeret_cd: 704,
          tozeret_nm: 'סקודה סלובקיה',
          tozeret_eretz_nm: 'סלובקיה',
          tozar: 'סקודה',
          degem_cd: 15,
          degem_nm: 'AA-NF14A1',
          shnat_yitzur: 2015,
          kvuzat_agra_cd: 1,
          nefah_manoa: 999,
          mishkal_kolel: 1290,
          gova: null,
          hanaa_cd: 1,
          hanaa_nm: '4X2',
          mazgan_ind: 1,
          abs_ind: 1,
          kariot_avir_source: '4',
          mispar_kariot_avir: 4,
          hege_koah_ind: 1,
          automatic_ind: 0,
          halonot_hashmal_source: '2',
          mispar_halonot_hashmal: 2,
          halon_bagg_ind: 0,
          galgaley_sagsoget_kala_ind: 1,
          argaz_ind: 0,
          merkav: "הצ'בק",
          ramat_gimur: 'ELEGANCE',
          delek_cd: 1,
          delek_nm: 'בנזין',
          mispar_dlatot: 5,
          koah_sus: 60,
          mispar_moshavim: 4,
          bakarat_yatzivut_ind: 1,
          kosher_grira_im_blamim: 0,
          kosher_grira_bli_blamim: 0,
          sug_tkina_cd: 1,
          sug_tkina_nm: 'אירופאית',
          sug_mamir_cd: 0,
          sug_mamir_nm: 'לא ידוע קוד 0',
          technologiat_hanaa_cd: null,
          technologiat_hanaa_nm: 'הנעה רגילה',
          kamut_CO2: 105,
          kamut_NOX: 0.012,
          kamut_PM10: null,
          kamut_HC: 0.035,
          kamut_HC_NOX: null,
          kamut_CO: 0.329,
          kamut_CO2_city: null,
          kamut_NOX_city: null,
          kamut_PM10_city: '',
          kamut_HC_city: null,
          kamut_CO_city: null,
          kamut_CO2_hway: null,
          kamut_NOX_hway: null,
          kamut_PM10_hway: '',
          kamut_HC_hway: null,
          kamut_CO_hway: null,
          madad_yarok: 166,
          kvutzat_zihum: 4,
          bakarat_stiya_menativ_ind: 0,
          bakarat_stiya_menativ_makor_hatkana: '',
          nitur_merhak_milfanim_ind: 0,
          nitur_merhak_milfanim_makor_hatkana: '',
          zihuy_beshetah_nistar_ind: 0,
          bakarat_shyut_adaptivit_ind: 0,
          zihuy_holchey_regel_ind: 0,
          zihuy_holchey_regel_makor_hatkana: '',
          maarechet_ezer_labalam_ind: 1,
          matzlemat_reverse_ind: 0,
          hayshaney_lahatz_avir_batzmigim_ind: 1,
          hayshaney_hagorot_ind: 0,
          nikud_betihut: null,
          ramat_eivzur_betihuty: null,
          teura_automatit_benesiya_kadima_ind: 0,
          shlita_automatit_beorot_gvohim_ind: 0,
          shlita_automatit_beorot_gvohim_makor_hatkana: '',
          zihuy_matzav_hitkarvut_mesukenet_ind: 0,
          zihuy_tamrurey_tnua_ind: 0,
          zihuy_rechev_do_galgali: 0,
          zihuy_tamrurey_tnua_makor_hatkana: '',
          CO2_WLTP: null,
          HC_WLTP: null,
          PM_WLTP: null,
          NOX_WLTP: null,
          CO_WLTP: null,
          CO2_WLTP_NEDC: null,
          kinuy_mishari: 'CITIGO',
          rank: 0.180698,
          createdAt: '2022-02-24T11:53:24.716Z',
          updatedAt: '2022-02-24T11:53:24.716Z',
          __v: 0,
        },
        GovData: {
          _id: '621771ac1ac9310366d1a96a',
          id: 3615948,
          mispar_rechev: 3411454,
          tozeret_cd: 704,
          sug_degem: 'P',
          tozeret_nm: 'סקודה סלובקיה',
          degem_cd: 15,
          degem_nm: 'AA-NF14A1',
          ramat_gimur: 'ELEGANCE',
          ramat_eivzur_betihuty: null,
          kvutzat_zihum: 4,
          shnat_yitzur: 2015,
          degem_manoa: 'CHY',
          mivchan_acharon_dt: '2021-03-14T22:00:00.000Z',
          tokef_dt: '2022-03-21T22:00:00.000Z',
          baalut: 'חברה',
          misgeret: 'TMBZZZAAZFD626305',
          tzeva_cd: 25,
          tzeva_rechev: 'כסף',
          zmig_kidmi: '185/55 R15',
          zmig_ahori: '185/55 R15',
          sug_delek_nm: 'בנזין',
          horaat_rishum: 150036,
          moed_aliya_lakvish: '2015-3',
          kinuy_mishari: 'CITIGO',
          rank: 0.0573088,
          createdAt: '2022-02-24T11:53:16.811Z',
          updatedAt: '2022-02-24T11:53:16.811Z',
          __v: 0,
        },
        createdAt: '2022-02-24T11:53:27.059Z',
        updatedAt: '2022-03-09T11:40:47.230Z',
      }),
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  @apply relative;
  @apply h-full;
  @apply flex flex-col justify-between;
  @apply shadow-md rounded-xl;
  @apply border;
  @apply p-4;
  @apply text-trade-silver-2;

  .line {
    @apply border-b border-trade-silver-5;
    @apply w-full mx-auto mt-1 mb-3;
  }

  img {
    @apply w-full object-contain mx-auto;
    @apply max-w-[360px];
    aspect-ratio: 4/3;
  }

  .name {
    @apply flex gap-2;
    @apply text-2xl;
    color: #1a3142;
  }

  .moreData {
    @apply flex justify-between items-center;
  }

  .typeCards {
    @apply flex items-center gap-4 text-sm pt-4;
    div {
      @apply flex flex-col justify-center items-center gap-1;
    }
  }
}

.mini {
  img {
    @apply max-w-[200px];
  }

  .name {
    @apply text-lg;
  }

  #likeButton {
    @apply hidden;
  }

  .segment,
  .km {
    @apply text-sm;
  }

  .typeCards {
    @apply text-xs;
  }
}
</style>
