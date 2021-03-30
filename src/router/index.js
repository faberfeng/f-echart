import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   console.log(to, from)
// })

export default router