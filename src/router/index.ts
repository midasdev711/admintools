import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import AuthLayout from '../layouts/authlayout.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Dashboard from '../views/dashboard/dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/auth'
  },
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
    component: AuthLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router