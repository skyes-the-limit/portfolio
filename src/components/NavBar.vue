<template>
  <div class="nav-bar">
    <span>
      <span class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">Arielle Bishop</router-link>
      </span>
      <span>
        <router-link :to="{ name: 'Illustration' }">Illustration</router-link>
        <router-link :to="{ name: 'Animation' }">Animation</router-link>
        <router-link :to="{ name: 'Videography' }">Videography</router-link>
        <router-link :to="{ name: 'Programming' }">Programming</router-link>
      </span>
    </span>
    <span>
      <router-link :to="{ name: 'About' }">About</router-link>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped lang="scss">
  .nav-bar {
    background-color: #303030;
    height: 8vh;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
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
    border-right: 1px solid #DDDDDD;
  }
</style>
