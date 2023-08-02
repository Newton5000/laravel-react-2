import { createRouter, createWebHistory } from 'vue-router'
import Public from '../views/Public.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import Todo from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: Public
    },
      {
          path: '/home',
          name: 'dashboard',
          component: Home
      },
      {
          path: '/register',
          name: 'register',
          component: Register
      },
      {
          path: '/login',
          name: 'login',
          component: Login
      },
      {
          path: '/profile',
          name: 'profile',
          component: Profile
      },
      {
          path: '/admin',
          name: 'admin',
          component: Admin
      },
      {
          path: '/todo',
          name: 'todo',
          component: Todo
      },
  ]
})

export default router
