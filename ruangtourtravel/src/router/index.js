import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    meta: {
      reload: true
    },
    component: () => import('../components/Main.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'destinasi',
        name: 'Destinasi',
        component: () => import('../views/Destinasi.vue')
      }
    ]
  },
  {
    path: '/master/',
    name: 'Master',
    component: () => import('../components/Main.vue'),
    children: [
      {
        path: 'destinasi/',
        name: 'Master Destinasi',
        component: () => import('../views/Master/Destinasi.vue')
      },
      {
        path: 'destinasi/:type',
        name: 'Form Master Destinasi',
        component: () => import('../views/Master/DestinasiForm.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
