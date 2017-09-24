import Vue from 'vue';
import Router from 'vue-router';
import Editor from '@/components/editor/main';
import Index from '@/components/home';
import Brochure from '@/components/brochure/main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
    },
    {
      path: '/brochure',
      name: 'brochure',
      component: Brochure,
    },
  ],
});
