import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from 'vue-browser-geolocation';

export default ({ $config: { google } }) => {

  Vue.use(VueGeolocation);
  Vue.use(VueGoogleMaps, {
    load: {
      key: google.map.key,
      libraries: "places",
      region: 'IL',
      language: 'he',
    }
  });

}
