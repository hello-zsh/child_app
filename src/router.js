import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  // base: window.__POWERED_BY_QIANKUN__ ? '/micro/child1' : '/',
  routes: [
    {
      path: '/vue',
      component: () => import('@/pages/vue')
    },
    {
      path: '/js',
      component: () => import('@/pages/js')
    }
  ],
})

router.beforeEach((to, from, next) => {
  next()
})

export default router