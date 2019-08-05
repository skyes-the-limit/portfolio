<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueVimeoPlayer from 'vue-vimeo-player'
  import NavBar from 'components/NavBar.vue';
  import router from 'router/index.js'

  Vue.use(VueVimeoPlayer);

  export default {
    name: 'App',
    components: {
      NavBar
    },
    router: router
  }
</script>

<style lang="scss">
  @import './assets/css/main.scss';
</style>
