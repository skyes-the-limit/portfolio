<template>
  <div class="preview-card">
    <template v-if="content.imageSources.length > 0">
      <img :src="imageSrc[0]" @click="showModal = !showModal">
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
        let out = [];

        for (let i = 0; i < this.content.imageSources.length; i++) {
          out.push(require("@/assets/img/" + this.content.imageSources[i]));
        }

        return out;
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
