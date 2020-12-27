<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    transition="fade-transition"
  >
    <div class="preview-card">
      <template>
        <img
          :src="imageSrc"
          :alt="content.description"
          @click="showModal = !showModal"
        />
        <div class="info">
          <span>{{ content.date }}</span>
          <span>{{ content.medium }}</span>
        </div>
        <modal :show-modal.sync="showModal" :content="content" />
      </template>
    </div>
  </v-lazy>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "PreviewCard",
  components: { Modal },
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          date: "",
          medium: "",
          description: "",
          previewSource: "",
          imageSources: [],
          videoSources: [],
        };
      },
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    imageSrc() {
      return require("@/assets/img/" + this.content.previewSource);
    },
  },
};
</script>

<style scoped>
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
  margin: 1vw;
}

.info {
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 0px) {
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
}

@media only screen and (min-width: 1200px) {
  img {
    width: 22vw;
    height: 22vw;
  }
  .preview-card {
    width: 22vw;
  }
}
</style>
