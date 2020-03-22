<template>
  <div v-if="windowWidth >= 600" class="nav-bar">
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
  <div v-else class="nav-bar">
    <div class="burger-button">
      <Slide>
        <router-link :to="{ name: 'Home' }">
          <span>Home</span>
        </router-link>
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

  @media only screen and (max-width: 599px) {
    .nav-bar {
      justify-content: center;
      align-items: center;
    }
    .nav-bar__logo {
      font-size: 32px;
      border: none;
    }
    .burger-button {
      position: absolute;
      left: 0.5rem;
    }
    .line-style {
      background-color: #FFFFFF;
    }
  }

  @media only screen and (min-width: 600px) {
    .nav-bar {
      font-size: 16px;
    }
    .nav-bar a {
      padding: 0 0.5rem;
    }
  }

  @media only screen and (min-width: 696px) {
    .nav-bar {
      font-size: 16px;
    }
    .nav-bar a {
      padding: 0 1rem;
    }
  }

  @media only screen and (min-width: 951px) {
    .nav-bar {
      font-size: 18px;
    }
    .nav-bar a {
      padding: 0 2rem;
    }
  }
</style>
