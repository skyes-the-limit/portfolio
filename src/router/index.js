import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import TwoD from 'components/2D';
import ThreeD from 'components/3D';
import Video from 'components/Video';
import Programming from 'components/Programming';
import About from 'components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '2D',
          name: '2D',
          component: TwoD
        },
        {
          path: '3D',
          name: '3D',
          component: ThreeD
        },
        {
          path: 'video',
          name: 'Video',
          component: Video
        },
        {
          path: 'programming',
          name: 'Programming',
          component: Programming
        },
        {
          path: 'About',
          name: 'About',
          component: About
        },
      ]
    },
    {
      path: '',
      redirect: 'Home'
    }
  ]
})