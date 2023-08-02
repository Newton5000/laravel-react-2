import { createRouter, createWebHistory } from 'vue-router'
import Public from '../views/Public.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Admin from '../views/Admin.vue'
import Todo from '../views/todo/Index.vue'
import CreateTodo from "@/views/todo/Create.vue"
import EditTodo from "@/views/todo/Edit.vue"
import ErrorPage from "@/views/ErrorPage.vue"

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
      {
          path: '/todo/create',
          name: 'todo.create',
          component: CreateTodo
      },
      {
          path: '/todo/edit/:id',
          name: 'todo.edit',
          component: EditTodo
      },
      {
          path: '/:pathMatch(.*)*',
          name: 'notfound',
          component: ErrorPage,
          props: {
              status: 404,
          }
      },
  ]
})

export default router
