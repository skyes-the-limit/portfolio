import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import ContentPage from '@/components/widgets/ContentPage';
import store from '@/store';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/animation', redirect: '/cgi' },
    { path: '/videography', redirect: '/video' },
    { path: '/programming', redirect: '/software' },
    {
      path: '',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Skye Bishop - Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Portfolio of Skye Bishop\'s previous work.'
          },
          {
            property: 'og:description',
            content: 'Portfolio of Skye Bishop\'s previous work.'
          }
        ]
      }
    },
    {
      path: '/illustration',
      name: 'Illustration',
      component: ContentPage,
      props: { cards: store.getters.illustration },
      meta: {
        title: 'Skye Bishop - Illustration',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Skye Bishop\'s illustration portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Skye Bishop\'s illustration portfolio work.'
          }
        ]
      }
    },
    {
      path: '/cgi',
      name: 'CGI',
      component: ContentPage,
      props: { cards: store.getters.cgi },
      meta: {
        title: 'Skye Bishop - CGI',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Skye Bishop\'s 3D modeling portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Skye Bishop\'s 3D modeling portfolio work.'
          }
        ]
      }
    },
    {
      path: '/video',
      name: 'Video',
      component: ContentPage,
      props: { cards: store.getters.video },
      meta: {
        title: 'Skye Bishop - Video',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Skye Bishop\'s video-based portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Skye Bishop\'s video-based portfolio work.'
          }
        ]
      }
    },
    {
      path: '/software',
      name: 'Software',
      component: ContentPage,
      props: { cards: store.getters.software },
      meta: {
        title: 'Skye Bishop - Software',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Skye Bishop\'s software portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Skye Bishop\'s software portfolio work.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Skye Bishop - About',
        metaTags: [
          {
            name: 'description',
            content: 'About the site developer Skye Bishop and their career.'
          },
          {
            property: 'og:description',
            content: 'About the site developer Skye Bishop and their career.'
          }
        ]
      }
    }
  ]
})
