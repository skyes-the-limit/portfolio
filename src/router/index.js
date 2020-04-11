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
        title: 'Arielle Bishop - Portfolio',
        metaTags: [
          {
            name: 'description',
            content: 'Portfolio of Arielle Bishop\'s previous work.'
          },
          {
            property: 'og:description',
            content: 'Portfolio of Arielle Bishop\'s previous work.'
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
        title: 'Arielle Bishop - Illustration',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Arielle Bishop\'s illustration portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Arielle Bishop\'s illustration portfolio work.'
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
        title: 'Arielle Bishop - 3D Modeling',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Arielle Bishop\'s 3D modeling portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Arielle Bishop\'s 3D modeling portfolio work.'
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
        title: 'Arielle Bishop - Video',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Arielle Bishop\'s video-based portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Arielle Bishop\'s video-based portfolio work.'
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
        title: 'Arielle Bishop - Software',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Arielle Bishop\'s software portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Arielle Bishop\'s software portfolio work.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Arielle Bishop - About',
        metaTags: [
          {
            name: 'description',
            content: 'About the site developer Arielle Bishop and her career.'
          },
          {
            property: 'og:description',
            content: 'About the site developer Arielle Bishop and her career.'
          }
        ]
      }
    }
  ]
})
