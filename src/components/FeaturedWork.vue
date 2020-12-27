<template>
  <div class="featuredWork">
    <template
      v-if="
        (content.imageSources ? content.imageSources.length : 0) +
          (content.videoSources ? content.videoSources.length : 0) >
        1
      "
    >
      <label
        class="carousel__control carousel__control--backward"
        @click="selectedIndex--"
      />
      <label
        class="carousel__control carousel__control--forward"
        @click="selectedIndex++"
      />
    </template>
    <vimeo-player
      v-if="displayObject.type === 'video'"
      :video-id="displayObject.source"
      :player-width="playerWidth"
      :player-height="playerHeight"
      :loop="loop"
      :autoplay="autoplay"
    />
    <img
      v-if="displayObject.type === 'image'"
      :src="displayObject.source"
      :alt="content.description"
    />
    <div class="annotations">
      <p>{{ content.description }}</p>
      <p v-if="content.collab">
        Made in collaboration with {{ content.collab }}.
      </p>
      <a
        v-if="content.github"
        :href="'https://github.com/ArielleBishop/' + content.github"
        target="blank"
        rel="noopener noreferrer"
        >Github</a
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "FeaturedWork",
  components: {},
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          date: "",
          medium: "",
          description: "",
          imageSources: [],
          videoSources: [],
        };
      },
    },
    data() {
      return {
        selectedIndex: 0,
        options: {},
        loop: true,
        autoplay: false,
      };
    },
    watch: {
      selectedIndex: function (newVal) {
        const combinedLength =
          (this.content.videoSources ? this.content.videoSources.length : 0) +
          (this.content.imageSources ? this.content.imageSources.length : 0);
        if (newVal === -1) {
          this.selectedIndex = combinedLength - 1;
        } else if (newVal === combinedLength) {
          this.selectedIndex = 0;
        }
      },
    },
    computed: {
      displayObject() {
        /* Returns object in the shape of:
          type: String    (one of "image" or "video")
          source: String  (imageSrc for images or vimeo id for videos)
         */
        let index = this.selectedIndex;
        if (
          index <
          (this.content.videoSources ? this.content.videoSources.length : 0)
        ) {
          return {
            type: "video",
            source: this.content.videoSources[index],
          };
        }
        index -= this.content.videoSources
          ? this.content.videoSources.length
          : 0;
        if (
          index <
          (this.content.imageSources ? this.content.imageSources.length : 0)
        ) {
          return {
            type: "image",
            source: this.imageSrc(this.content.imageSources[index]),
          };
        }
        return null;
      },
      playerWidth() {
        return Math.min(
          0.8 * window.visualViewport.width,
          window.visualViewport.width - 150
        );
      },
      playerHeight() {
        return Math.min(
          0.45 * window.visualViewport.width,
          window.visualViewport.width - 150
        );
      },
    },
    created() {
      this.$nextTick(() => {
        window.addEventListener("keydown", this.handleKey);
      });
    },
    destroyed() {
      window.removeEventListener("keydown", this.handleKey);
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
      onReady() {
        this.playerReady = true;
      },
      play() {
        this.$refs.player.play();
      },
      stop() {
        this.$refs.player.stop();
      },
      mute() {
        this.$refs.player.mute();
      },
      unmute() {
        this.$refs.player.unmute();
      },
    },
  },
};
</script>
