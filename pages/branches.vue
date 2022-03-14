<template>
  <div class="container mx-auto">
    <div class="main-title">
      <span>הסניפים שלנו </span>
    </div>
    <div class="grid lg:grid-cols-2 gap-10 px-4 lg:px-0">
      <ul>
        <li
          v-for="(place, i) in markers"
          :key="`place-${i}`"
          class="p-8 mb-6"
          :class="{
            'bg-trade-orange-2 bg-opacity-20 ': i === currentMidx,
            'bg-trade-silver-3': i !== currentMidx,
          }"
          @click="toggleInfoWindow(place, i)"
        >
          <h3 class="text-4xl font-bold">{{ place.name }}</h3>
          <div class="flex flex-col gap-6 pt-4">
            <div class="icon">
              <IconsPlace />
              <div>
                <p>כתובת</p>
                <p class="text-trade-silver-2 leading-3">
                  {{ place.address }}
                </p>
              </div>
            </div>
            <div class="icon">
              <IconsClock />
              <div>
                <p>שעות פעילות</p>
                <p class="text-trade-silver-2 leading-3">{{ place.time }}</p>
              </div>
            </div>
            <div class="icon">
              <IconsPhone />
              <div>
                <p>טלפון</p>
                <p class="text-trade-silver-2 leading-3">{{ place.phone }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="h-full">
        <div class="lg:sticky lg:top-32">
          <GmapMap
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 80vh"
            :options="{ mapId: '78fd4fab47c16182' }"
          >
            <gmap-info-window
              :options="{
                pixelOffset: {
                  width: 0,
                  height: -50,
                },
              }"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen = false"
            >
              <div v-if="infoWinOpen" class="px-8 py-2">
                <div class="text-2xl font-sans">
                  {{ markers[currentMidx].name }}
                </div>
                <div class="text-lg">
                  {{ markers[currentMidx].address }}
                </div>
                <div class="text-lg">{{ markers[currentMidx].time }}</div>
                <div class="text-lg">{{ markers[currentMidx].phone }}</div>
              </div>
            </gmap-info-window>
            <GmapMarker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              :draggable="false"
              :clickable="true"
              icon="/images/map-icon.svg"
              @click="toggleInfoWindow(m, index)"
            />
          </GmapMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'BranchesPage',
  data: () => ({
    infoWindowPos: null,
    infoWinOpen: false,
    currentMidx: null,
    //
    center: { lat: 45, lng: 46 },
    zoom: 12,
    markers: [
      {
        name: 'ראשל״צ',
        address: 'סחרוב 7, ראשון לציון',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 31.99208417992646, lng: 34.769448698030594 },
      },
      {
        name: 'גלילות',
        address: 'פי גלילות רמת השרון',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 32.136127836280124, lng: 34.80374625570357 },
      },
      {
        name: 'מדיה מייבן',
        address: 'אבא קובנר 4, תל אביב',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 32.1012227778113, lng: 34.7833310403625 },
      },
      {
        name: 'עפולה',
        address: 'מנחם בגין 62, עפולה',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 32.600625811864255, lng: 35.29635734037236 },
      },
      {
        name: 'ראשל״צ',
        address: 'סחרוב 7, ראשון לציון',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 31.99208417992646, lng: 34.769448698030594 },
      },
      {
        name: 'חיפה',
        address: 'ההסתדרות 52, חיפה',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 32.792021280967525, lng: 35.03657274222152 },
      },
      {
        name: 'חולון',
        address: 'המאלכה 30, חולון',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 32.01517137240192, lng: 34.79880776919588 },
      },
      {
        name: 'באר שבע',
        address: 'אליהו נאוי 57, באר שבע',
        time: 'א-ה: 08:00-19:00, שישי 08:00-14:00',
        phone: '076-599-4537',
        position: { lat: 31.25241013372014, lng: 34.81908471335684 },
      },
    ],
  }),
  methods: {
    toggleInfoWindow(marker, idx) {
      this.center = marker.position
      this.infoWindowPos = {
        lat: marker.position.lat,
        lng: marker.position.lng,
      }
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },
    geoLocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
  },
  mounted() {
    this.geoLocate()
  },
}
</script>

<style lang="scss" scoped>
.icon {
  @apply flex gap-3 text-xl items-center;
  svg {
    @apply h-6;
  }
}
</style>
