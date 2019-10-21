<template>
  <div class="nav-bar">
    <Slide>
      <router-link :to="{ name: 'Illustration' }">
        <span>Illustration</span>
      </router-link>
      <router-link :to="{ name: 'Animation' }">
        <span>Animation</span>
      </router-link>
      <router-link :to="{ name: 'Videography' }">
        <span>Videography</span>
      </router-link>
      <router-link :to="{ name: 'Programming' }">
        <span>Programming</span>
      </router-link>
      <router-link :to="{ name: 'About' }">
        <span>About</span>
      </router-link>
    </Slide>
    <span class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">Arielle Bishop</router-link>
      </span>
  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu'

  export default {
    name: "NavBarMobile",
    components: {Slide}
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #303030;
    height: 8vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav-bar a {
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    padding: 0 2rem;
  }
  .nav-bar__logo {
    font-weight: bolder;
    font-size: 32px;
  }
</style>
<style>
  .bm-burger-button {
    position: relative;
    left: inherit;
    top: inherit;
    margin: 16px;
  }
  .line-style {
    background-color: #FFFFFF;
  }
</style>
