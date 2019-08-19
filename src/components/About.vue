<template>
  <div class="fullscreen-centered">
    <img :src="require('@/assets/img/about-profile.png')">
    <span>
      <h1>Hello,</h1>
      I'm a Boston based artist & developer currently studying at Northeastern University.
      I'm interested in the intersection of computer technology and media art, especially virtual reality and interaction design.
      I'm currently pursuing my second co-op for January 2020.
      <br><br>
      Feel free to reach out to me at ArielleEBishop@gmail.com
    </span>
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

  img {
    display: inline-block;
    max-width: 75vw;
    max-height: 75vh;
  }

  p {
    display: inline-block;
  }

  span {
    margin: 2rem;
    max-width: 26rem;
  }

  h1 {
    margin: 0.5em 0;
  }
</style>
