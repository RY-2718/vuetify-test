import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/pages/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello-world',
      component: HelloWorld,
    },
  ],
});
