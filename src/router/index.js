import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import About from 'components/About';
import ContentPage from 'widgets/ContentPage';
import store from 'store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/2D',
      name: '2D',
      component: ContentPage,
      props: store.getters.twoD
    },
    {
      path: '/3D',
      name: '3D',
      component: ContentPage,
      props: store.getters.threeD
    },
    {
      path: '/video',
      name: 'Video',
      component: ContentPage,
      props: store.getters.video
    },
    {
      path: '/programming',
      name: 'Programming',
      component: ContentPage,
      props: store.getters.programming
    },
    {
      path: 'About',
      name: 'About',
      component: About
    }
  ]
})