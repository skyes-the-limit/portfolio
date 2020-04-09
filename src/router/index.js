import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import ContentPage from '@/components/widgets/ContentPage';
import store from '@/store';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
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
      path: '/animation',
      name: 'Animation',
      component: ContentPage,
      props: { cards: store.getters.animation },
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
      path: '/videography',
      name: 'Videography',
      component: ContentPage,
      props: { cards: store.getters.videography },
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
      path: '/programming',
      name: 'Programming',
      component: ContentPage,
      props: { cards: store.getters.programming },
      meta: {
        title: 'Arielle Bishop - Programming',
        metaTags: [
          {
            name: 'description',
            content: 'Collection of Arielle Bishop\'s programming portfolio work.'
          },
          {
            property: 'og:description',
            content: 'Collection of Arielle Bishop\'s programming portfolio work.'
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
