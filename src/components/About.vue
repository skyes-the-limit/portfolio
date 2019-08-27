<template>
  <div class="fullscreen-centered">
    <div class="justify-top">
      <img :src="require('@/assets/img/about-profile.png')">
      <span>
        <h1>Hello,</h1>
        I'm a Boston based artist & developer currently studying at Northeastern University.
        I'm interested in the intersection of computer technology and media art, especially virtual reality and interaction design.
        I am currently searching for my second co-op in January 2020.
        <br><br>
        Feel free to reach out to me at ArielleEBishop@gmail.com
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped lang="scss">
  .fullscreen-centered {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92vh;
    width: 100vw;
  }

  .justify-top {
    display: flex;
    justify-content: flex-start;
  }

  img {
    display: inline-block;
    max-width: 75vw;
    max-height: 75vh;
  }

  p {
    display: inline-block;
  }

  span {
    margin: 0 2rem;
    max-width: 26rem;
  }

  h1 {
    margin: 0.5em 0;
  }
</style>
