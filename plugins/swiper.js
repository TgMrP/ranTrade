import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'

import SwiperCore, { Pagination, Autoplay, Navigation, FreeMode } from 'swiper'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
SwiperCore.use([Pagination, Autoplay, Navigation, FreeMode])