<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <div class="preview-card">
      <router-link :to="{ name: content.page }">
        <h4>{{ content.title }}</h4>
          <img
          :src="imageSrc"
          :alt="content.description"
          />
        </router-link>
    </div>
  </v-lazy>
</template>

<script>
export default {
  name: "PreviewCard",
  components: { },
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          title: "",
          page: "",
          imageSrc: ""
        };
      },
    },
  },
  computed: {
    imageSrc() {
      return require("@/assets/img/" + this.content.imageSrc);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}

h4 {
  text-align: center;
  margin-bottom: 8px;
}

img {
  object-fit: cover;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

img:hover {
  opacity: 0.5;
  cursor: pointer;
}

.preview-card {
  display: inline;
  margin: 2vw;
}

.info {
  display: flex;
  justify-content: space-between;
}

/* @media only screen and (min-width: 0px) {
  img {
    width: 90vw;
    height: 90vw;
  }
  .preview-card {
    width: 90vw;
  }
}

@media only screen and (min-width: 600px) {
  img {
    width: 45vw;
    height: 45vw;
  }
  .preview-card {
    width: 45vw;
  }
}

@media only screen and (min-width: 850px) {
  img {
    width: 30vw;
    height: 30vw;
  }
  .preview-card {
    width: 30vw;
  }
} */

/* @media only screen and (min-width: 1200px) { */
  img {
    width: calc(88vw / 3);
    height: calc(88vw / 3);
  }
  .preview-card {
    width: calc(88vw / 3);
  }
/* } */
</style>
