import Vue from 'vue'

//
Vue.filter('price', function (value) {
  if (!value) return 0 + ' ₪'
  return Number(value).toLocaleString() + ' ₪'
})
//
Vue.filter('number', function (value) {
  if (!value || isNaN(value)) return 0
  return Number(value).toLocaleString()
})
//

Vue.filter('mmyyyy', function (value) {
  const date = new Date(value)
  const m = date.getMonth() + 1
  const month = m < 10 ? `0${m}` : m
  const year = date.getFullYear()

  return `${month}.${year}`
})