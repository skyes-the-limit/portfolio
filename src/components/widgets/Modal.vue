<template>
  <div>
    <transition name="modal">
      <div v-if="showModal">
        <div class="overlay" @click.self="closeModal()">
          <div class="modal">
            <vimeo-player v-if="content.videoId" :video-id="content.videoId"
                          :player-width="playerWidth" :player-height="playerHeight"
                          :loop="loop" :autoplay="autoplay" />
              <img v-else :src="imageSrc(content.sources[0])">
              <!-- TODO: Add support for multiple image sources. -->
            <p>{{ content.description }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

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
            sources: [],
            videoId: ''
          }
        }
      }
    },
    data() {
      return {
        playerWidth: 0.8 * w,
        playerHeight: 0.8 * h,
        options: {},
        loop: true,
        autoplay: false
      }
    },
    methods: {
      imageSrc(source) {
        return require("@/assets/img/" + source);
      },
      closeModal() {
        this.$emit('update:show-modal', false);
      },
      onReady() {
        this.playerReady = true
      },
      play() {
        this.$refs.player.play()
      },
      stop() {
        this.$refs.player.stop()
      },
      mute() {
        this.$refs.player.mute();
      },
      unmute() {
        this.$refs.player.unmute()
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
