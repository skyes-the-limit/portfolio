<template>
  <div>
    <transition name="modal">
      <div v-if="showModal" v-touch:swipe="handleSwipe">
        <div class="overlay" @click.self="closeModal()">
          <div class="modal">
            <template v-if="((content.imageSources ? content.imageSources.length : 0) + (content.videoSources ? content.videoSources.length : 0)) > 1">
              <label class="carousel__control carousel__control--backward" @click="selectedIndex--" />
              <label class="carousel__control carousel__control--forward" @click="selectedIndex++" />
            </template>
            <svg @click.self="closeModal()" viewBox="0 0 24 24">
              <path fill="#303030" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
            <vimeo-player v-if="displayObject.type === 'video'" :video-id="displayObject.source"
                          :player-width="playerWidth" :player-height="playerHeight"
                          :loop="loop" :autoplay="autoplay" />
            <img v-if="displayObject.type === 'image'" :src="displayObject.source" :alt="content.description">
            <div class="annotations">
              <p>{{ content.description }}</p>
              <p v-if="content.collab">Made in collaboration with {{ content.collab }}.</p>
              <a v-if="content.github"
                :href="'https://github.com/skyes-the-limit/' + content.github"
                target="blank"
                rel="noopener noreferrer"
              >Github</a>
            </div>
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
            imageSources: [],
            videoSources: []
          }
        }
      }
    },
    data() {
      return {
        selectedIndex: 0,
        options: {},
        loop: true,
        autoplay: false
      }
    },
    watch: {
      selectedIndex: function (newVal) {
        const combinedLength = (this.content.videoSources ? this.content.videoSources.length : 0) + (this.content.imageSources ? this.content.imageSources.length : 0);
        if (newVal === -1) {
          this.selectedIndex = combinedLength - 1;
        } else if (newVal === combinedLength) {
          this.selectedIndex = 0;
        }
      }
    },
    computed: {
      displayObject() {
        /* Returns object in the shape of:
          type: String    (one of "image" or "video")
          source: String  (imageSrc for images or vimeo id for videos)
         */
        let index = this.selectedIndex;
        if (index < (this.content.videoSources ? this.content.videoSources.length : 0)) {
          return {
            type: 'video',
            source: this.content.videoSources[index]
          }
        }
        index -= (this.content.videoSources ? this.content.videoSources.length : 0);
        if (index < (this.content.imageSources ? this.content.imageSources.length : 0)) {
          return {
            type: 'image',
            source: this.imageSrc(this.content.imageSources[index])
          }
        }
        return null;
      },
      playerWidth() {
        return Math.min(0.8 * window.visualViewport.width, window.visualViewport.width - 150);
      },
      playerHeight() { 
        return Math.min(0.45 * window.visualViewport.width, window.visualViewport.width - 150);
      }
    },
    created() {
      this.$nextTick(() => {
        window.addEventListener('keydown', this.handleKey);
      });
    },
    destroyed() {
      window.removeEventListener('keydown', this.handleKey);
    },
    methods: {
      handleSwipe(direction) {
        switch (direction) {
          case "left":
            this.selectedIndex++;
            break;
          case "right":
            this.selectedIndex--;
            break;
        }
      },
      handleKey(event) {
        switch (event.code) {
          case "ArrowLeft":
            this.selectedIndex--;
            break;
          case "ArrowRight":
            this.selectedIndex++;
            break;
          case "Escape":
            this.closeModal();
            break;
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
    display: table-cell;
    max-width: calc(100vw - 150px);
    max-height: 75vh;
    object-fit: contain;
  }

  svg {
    width: 20px;
    height: 20px;
    float: right;
    margin: -16px;
    cursor: pointer;
  }

  .annotations {
    display: table-caption;
    caption-side: bottom;
    background-color: #fff;
    padding: 0 16px 16px;
    text-align: center;
  }

  .modal {
    width: fit-content;
    height: fit-content;
    display: table;
    margin: 0 auto;
    padding: 16px;
    background-color: #fff;
    transition: all 0.2s ease-in;
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
