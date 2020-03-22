<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue'
  import { isMobile } from 'mobile-device-detect';
  import VueVimeoPlayer from 'vue-vimeo-player'
  import NavBar from '@/components/NavBar.vue';
  import router from '@/router/'
  import Vue2TouchEvents from 'vue2-touch-events'

  Vue.use(Vue2TouchEvents);
  Vue.use(VueVimeoPlayer);

  export default {
    name: 'App',
    components: {
      NavBar
    },
    router: router,
    data() {
      return {
        isMobile: isMobile
      }
    }
  }
</script>

<style lang="scss">
  @import 'main';
</style>
