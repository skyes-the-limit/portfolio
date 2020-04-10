<template>
  <div v-if="windowWidth >= 485" class="nav-bar">
    <span>
      <span class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">Arielle Bishop</router-link>
      </span>
      <span>
        <router-link :to="{ name: 'Illustration' }">Illustration</router-link>
        <router-link :to="{ name: 'CGI' }">CGI</router-link>
        <router-link :to="{ name: 'Video' }">Video</router-link>
        <router-link :to="{ name: 'Software' }">Software</router-link>
      </span>
    </span>
    <span>
      <router-link :to="{ name: 'About' }">About</router-link>
    </span>
  </div>
  <div v-else class="nav-bar">
    <div class="burger-button">
      <Slide :closeOnNavigation="true">
        <router-link :to="{ name: 'Home' }">
          <span>Home</span>
        </router-link>
        <router-link :to="{ name: 'Illustration' }">
          <span>Illustration</span>
        </router-link>
        <router-link :to="{ name: 'CGI' }">
          <span>CGI</span>
        </router-link>
        <router-link :to="{ name: 'Video' }">
          <span>Video</span>
        </router-link>
        <router-link :to="{ name: 'Software' }">
          <span>Software</span>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <span>About</span>
        </router-link>
      </Slide>
    </div>
    <span class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">Arielle Bishop</router-link>
    </span>
  </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu'

  export default {
    name: 'NavBar',
    components: { Slide },
    data() {
      return {
        windowWidth: 0,
        windowHeight: 0
      }
    },
    created() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
      this.onResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.onResize);
    },
    methods: {
      onResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-bar {
    background-color: #303030;
    height: 8vh;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-bar a {
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
  }
  .nav-bar__logo {
    font-weight: bolder;
    border-right: 1px solid #DDDDDD;
  }
  .burger-button {
    position: absolute;
    left: 0.5rem;
    top: 2vh;
    visibility: hidden;
  }

  @media only screen and (max-width: 484px) {
    .nav-bar {
      justify-content: center;
      align-items: center;
    }
    .nav-bar__logo {
      font-size: 32px;
      margin-left: 36px;
      border: none;
    }
    .burger-button {
      visibility: visible;
    }
  }

  @media only screen and (max-width: 300px) {
    .nav-bar__logo {
      font-size: 24px;
    }
  }

  @media only screen and (min-width: 485px) {
    .nav-bar a {
      padding: 0 0.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .nav-bar a {
      padding: 0 1rem;
    }
  }

  @media only screen and (min-width: 819px) {
    .nav-bar {
      font-size: 18px;
    }
    .nav-bar a {
      padding: 0 2rem;
    }
  }
</style>

<style>
  .bm-burger-button {
    left: 0;
    top: 0;
  }
  .bm-burger-bars {
    background-color: #FFFFFF;
  }
  .bm-item-list {
    color: #303030;
  }
</style>
