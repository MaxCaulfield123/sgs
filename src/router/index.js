import App from '../page/index.vue'
import game from '../page/game.vue'

export default[
  {
    path: '/',
    component: App, //顶层路由，对应index.html
  },
  {
    path: '/game',
    component:game,
  }
]