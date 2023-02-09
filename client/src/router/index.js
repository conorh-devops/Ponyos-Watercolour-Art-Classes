import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name != "NavigationDuplicated") throw err
  })
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/courses-admin',
    name: 'courses-admin',
    component: () => import('../views/CoursesAdmin.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/Students.vue')
  },
  {
    path: '/students/:id',
    name: 'student',
    component: () => import('../views/Student.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
