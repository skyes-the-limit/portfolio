<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import router from './router/index.js'

  export default {
    name: 'app',
    components: {
      NavBar
    },
    router
  }
</script>

<style lang="scss">
  @import '/assets/css/main.scss';

  .content-container {
    padding: 1rem 4rem;
  }
</style>
