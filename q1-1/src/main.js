import Vue from 'vue'
import App from './App'

import Room from './components/Room'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
// console.log(room)
// const Room = require('./components/Room')
// const room = 1
// var vue = new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
//  })
//  export default vue
// const componentsBox = {Room}
// Object.keys(componentsBox).forEach(name => {
//   name.install = function(Vue) {
//     Vue.component()
//   }
//   Vue.component('name', componentsBox[name])
// })
// const install = function (Vue, opts= {}) {}
Room.install = function (Vue) {
  Vue.component(Room.name, Room)
}
// module.exports = componentsBox
export default Room
// export const componentsBox = { room }
