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
        <img :src="imageSrc" :alt="content.description" />
      </router-link>
    </div>
  </v-lazy>
</template>

<script>
export default {
  name: "PreviewCard",
  components: {},
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          title: "",
          page: "",
          imageSrc: "",
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

img {
  width: calc(88vh / 3);
  height: calc(88vh / 3);
}

.preview-card {
  width: calc(88vh / 3);
}
</style>
