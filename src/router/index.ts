import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import AuthLayout from '../layouts/authlayout.vue'
import LightLayout from '../layouts/lightlayout.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/dashboard/dashboard.vue'
import Profile from '../views/profile.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   redirect: '/auth'
  // },
  {
    path: "/auth",
    redirect: '/auth/login',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ]
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: LightLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router