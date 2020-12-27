<template>
  <div v-touch:swipe="handleSwipe">
    <v-carousel
      v-model="selectedIndex"
      continuous
      :show-arrows="false"
      hide-delimiters
      :height="height"
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :src="require('@/assets/img/' + slide.imageSrc)"
      >
        <router-link :to="{ name: slide.page }">
          <div class="title">
            <h1 class="unselectable">{{ slide.title }}</h1>
          </div>
        </router-link>
      </v-carousel-item>
    </v-carousel>
    <div class="controls">
      <label
        class="carousel__control carousel__control--backward"
        @click="selectedIndex--"
      />
      <label
        class="carousel__control carousel__control--forward"
        @click="selectedIndex++"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselFullScreen",
  props: {
    slides: {
      type: Array,
      /* Expected Array of Objects in the shape:
          imageSrc: String  source of image asset
          title: String     Text to display for the page
          page: String      vue-router name of the page to navigate to
        */
      default: [],
    },
  },
  computed: {
    width() {
      return window.visualViewport.width;
    },
    height() {
      return window.visualViewport.height - 56;
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  watch: {
    selectedIndex: function (newVal) {
      if (newVal === -1) {
        this.selectedIndex = this.slides.length - 1;
      } else if (newVal === this.selectedIndex.length) {
        this.selectedIndex = 0;
      }
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title h1 {
  color: #ffffff;
  font-size: 44px;
  line-height: 50px;
  margin: 0;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.carousel__control {
  height: 30px;
  width: 30px;
  margin: 15px;
  top: 50%;
  position: absolute;
  display: block;
  cursor: pointer;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.35);
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
