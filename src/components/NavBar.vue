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
    <svg class="drawer-button" @click="drawer = true" viewBox="0 0 24 24">
      <path fill="#fff" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
    <span class="nav-bar__logo">
      <router-link :to="{ name: 'Home' }">Arielle Bishop</router-link>
    </span>
    <v-navigation-drawer v-model="drawer" absolute temporary dark>
      <v-list>
        <v-list-item>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Illustration' }">Illustration</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'CGI' }">CGI</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Video' }">Video</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'Software' }">Software</router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'About' }">About</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      windowWidth: 0,
      drawer: false
    };
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.visualViewport.width;
    }
  }
};
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: #303030;
  height: 56px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar a {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.nav-bar__logo {
  font-weight: bolder;
  border-right: 1px solid #dddddd;
}

.drawer-button {
  position: relative;
  visibility: hidden;
}

@media only screen and (max-width: 484px) {
  .nav-bar {
    justify-content: flex-start;
    align-items: center;
  }
  .nav-bar__logo {
    font-size: 32px;
    margin: 0 auto;
    border: none;
  }
  .drawer-button {
    width: 40px;
    height: 56px;
    margin-left: 10px;
    visibility: visible;
  }
}

@media only screen and (max-width: 320px) {
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
