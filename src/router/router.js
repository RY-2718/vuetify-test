import Vue from 'vue';
import Router from 'vue-router';
import Root from '@/pages/Root.vue';
import Login from '@/pages/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
