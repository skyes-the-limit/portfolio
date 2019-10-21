<template>
  <div v-bind:class="{ 'outer-container-mobile': isMobile, 'outer-container-desktop': !isMobile }">
    <div v-bind:class="{ 'inner-container-mobile': isMobile, 'inner-container-desktop ': !isMobile }">
      <img :src="require('@/assets/img/about-profile.png')">
      <span>
        <h1>Hello,</h1>
        <span>
          I'm a Boston based artist & developer currently studying at Northeastern University.
          I'm interested in the intersection of computer technology and media art, especially virtual reality and interaction design.
          <br><br>
          Feel free to reach out to me at ArielleEBishop@gmail.com
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  import {isMobile} from 'mobile-device-detect';

  export default {
    name: 'About',
    data() {
      return {
        isMobile: isMobile
      }
    }
  }
</script>

<style scoped lang="scss">
  .outer-container-desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92vh;
    width: 100vw;
  }

  .outer-container-mobile {
    max-width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }

  .inner-container-desktop {
    display: flex;
    justify-content: flex-start;
  }

  .inner-container-mobile {
    width: 100%;
  }

  .inner-container-desktop img {
    display: inline-block;
    max-width: 75vw;
    max-height: 75vh;
  }

  .inner-container-mobile img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
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
