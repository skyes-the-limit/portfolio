<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'Home' }"><b>Arielle Bishop</b></router-link>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar'
  }
</script>

<style scoped lang="scss">
  .nav-bar {
    background-color: #303030;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .nav-bar a {
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
  }
</style>