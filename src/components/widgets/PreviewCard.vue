<template>
  <div class="preview-card">
    <template v-if="content.previewSource">
      <img :src="imageSrc" @click="showModal = !showModal">
      <div class="info">
        <span>{{ content.date }}</span>
        <span>{{ content.medium }}</span>
      </div>
      <modal :show-modal.sync="showModal" :content="content" />
    </template>
  </div>
</template>

<script>
  import Modal from './Modal';

  export default {
    name: "PreviewCard",
    components: {Modal},
    props: {
      content: {
        type: Object,
        default: function () {
          return {
            date: '',
            medium: '',
            description: '',
            previewSource: '',
            imageSources: [],
            videoSources: []
          }
        }
      }
    },
    data() {
      return {
        showModal: false
      }
    },
    computed: {
      imageSrc() {
        return require("@/assets/img/" + this.content.previewSource);
      }
    }
  }
</script>

<style scoped>
  img {
    width: 22vw;
    height: 22vw;
    object-fit: cover;
    opacity: 1;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }

  img:hover {
    opacity: .5;
    cursor: pointer;
  }

  .preview-card {
    display: inline;
    margin: 1.5vw 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }
</style>
