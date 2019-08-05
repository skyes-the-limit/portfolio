<template>
  <div>
    <transition name="modal">
      <div v-if="showModal">
        <div class="overlay" @click.self="showModal = false">
          <div class="modal">
            <img :src="content.sources[0]">
            <p>{{ content.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Modal",
    props: {
      showModal: {
        type: Boolean
      },
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
    }
  }
</script>

<style scoped>
  img {
    display: block;
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
  }

  p {
    margin: 1em 0 0;
  }

  .modal {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    transition: all 0.2s ease-in;
    align-items: center;
  }

  .fadeIn-enter .modal {
    transform: scale(1.1);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000094;
    z-index: 999;
    transition: opacity 0.2s ease;
  }
</style>