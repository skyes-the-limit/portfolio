<template>
  <div class="preview-card">
    <img :src="content.sources[0]" @click="showModal = !showModal">
    <div class="info">
      <span>{{ content.date }}</span>
      <span>{{ content.medium }}</span>
    </div>
    <modal :show-modal="showModal" :content="content" />
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
            sources: []
          }
        }
      }
    },
    data() {
      return {
        showModal: false
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
