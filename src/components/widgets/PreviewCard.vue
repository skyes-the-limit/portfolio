<template>
  <div class="preview-card">
    <template v-if="content.previewSource">
      <img :src="imageSrc" @click="showModal = !showModal" v-bind:class="{ 'img-mobile': isMobile, 'img-desktop': !isMobile }">
      <div class="info">
        <span>{{ content.date }}</span>
        <span>{{ content.medium }}</span>
      </div>
      <modal :show-modal.sync="showModal" :content="content" />
    </template>
  </div>
</template>

<script>
  import { isMobile } from 'mobile-device-detect';
  import Modal from './Modal';

  export default {
    name: "PreviewCard",
    components: { Modal },
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
        showModal: false,
        isMobile: isMobile
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
    object-fit: cover;
    opacity: 1;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }

  img:hover {
    opacity: .5;
    cursor: pointer;
  }

  .img-desktop {
    width: 22vw;
    height: 22vw;
  }

  .img-mobile {
    width: 80vw;
    height: 80vw;
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
