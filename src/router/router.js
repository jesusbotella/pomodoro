import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Test from '@/views/Test.vue';

// Guards
import checkIfLoggedIn from './guards/check-if-logged-in';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        requiresAuthentication: true,
      },
    },
    {
      path: '/pomodoro/:type',
      name: 'pomodoro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pomodoro" */ '@/views/pomodoro/Pomodoro.vue'),
    },
  ],
});

router.beforeEach(checkIfLoggedIn);

export default router;
