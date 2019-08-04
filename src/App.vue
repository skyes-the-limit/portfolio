<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from 'components/NavBar.vue';
  import router from 'router/index.js'

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
