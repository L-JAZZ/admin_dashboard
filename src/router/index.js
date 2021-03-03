import Vue from 'vue'
import VueRouter from 'vue-router'
import Banks from "@/views/Banks";
import Dashboard from "@/views/Dashboard";
import Payments from "@/views/Payments";
import Terminals from "@/views/Terminals";
import Users from "@/views/Users";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/banks',
    name: 'Banks',
    component: Banks
  },
  {
    path: '/terminals',
    name: 'Terminals',
    component: Terminals
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },

]

const router = new VueRouter({
  routes
})

export default router
