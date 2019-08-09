<template>
  <div class="fullscreen-centered">
    <img :src="require('@/assets/img/about-profile.png')">
    <span>
      <h1>Hello,</h1>
      I'm a Boston based artist & developer currently studying at Northeastern University.
      I'm interested in the intersection of computer technology and media art, especially virtual reality and interaction design.
      In fall 2019 I'll be pursuing my second co-op.
      <br><br>
      Check out my <a :href="require('@/assets/Arielle_Bishop_Resume.pdf')">resume</a>!
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
</style>
