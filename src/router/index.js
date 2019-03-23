import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/PageHome';
import PageThreadShow from '@/components/pages/PageThreadShow';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    }
  ],
  mode: 'history'
});
