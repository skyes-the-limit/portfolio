<template>
  <div>
    <transition name="modal">
      <div v-if="showModal">
        <div class="overlay" @click.self="closeModal()">
          <div class="modal">
            <label class="carousel__control carousel__control--backward" @click="decrement()" />
            <label class="carousel__control carousel__control--forward" @click="increment()" />
            <vimeo-player v-if="displayObject.type === 'video'" :video-id="displayObject.source"
                          :player-width="playerWidth" :player-height="playerHeight"
                          :loop="loop" :autoplay="autoplay" />
            <img v-if="displayObject.type === 'image'" :src="displayObject.source">
            <p>{{ content.description }}</p>
            <a v-if="content.github" :href="'https://github.com/ArielleBishop/' + content.github">Github</a>
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
            imageSources: [],
            videoSources: []
          }
        }
      }
    },
    data() {
      return {
        selectedIndex: 0,
        playerWidth: 0.8 * w,
        playerHeight: 0.8 * h,
        options: {},
        loop: true,
        autoplay: false
      }
    },
    computed: {
      displayObject() {
        /* Returns object in the format of:
          type: String  ["image" or "video"]
          source: imageSrc for images or vimeo id for videos
         */
        let index = this.selectedIndex;
        if (index < this.content.videoSources.length) {
          return {
            type: 'video',
            source: this.content.videoSources[index]
          }
        }
        index -= this.content.videoSources.length;
        if (index < this.content.imageSources.length) {
          return {
            type: 'image',
            source: this.imageSrc(this.content.imageSources[index])
          }
        }
        return null;
      }
    },
    methods: {
      increment() {
        if (this.selectedIndex === (this.content.videoSources.length + this.content.imageSources.length - 1)) {
          this.selectedIndex = 0;
        } else {
          this.selectedIndex++;
        }
      },
      decrement() {
        if (this.selectedIndex === 0) {
          this.selectedIndex = (this.content.videoSources.length + this.content.imageSources.length - 1);
        } else {
          this.selectedIndex--;
        }
      },
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

  .carousel__control {
    height: 30px;
    width: 30px;
    margin: -15px 15px 0;
    top: 50%;
    position: absolute;
    display: block;
    cursor: pointer;
    border-width: 5px 5px 0 0;
    border-style: solid;
    border-color: #fafafa;
    opacity: 0.35;
    outline: 0;
    z-index: 3;
  }

  .carousel__control:hover {
    opacity: 1;
  }

  .carousel__control--backward {
    left: 10px;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  .carousel__control--forward {
    right: 10px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
