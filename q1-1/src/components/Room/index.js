import Room from './src'
Room.install = function (Vue) {
  Vue.component(Room.name, Room)
}
export default Room
