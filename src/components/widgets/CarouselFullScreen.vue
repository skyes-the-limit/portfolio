<template>
  <ul class="carousel" v-touch:swipe="handleSwipe">

    <input v-for="(slide, index) in slides" :id="slide.page" :key="slide.page"
           v-model="selectedIndex" :value="index"
           class="carousel__activator" type="radio" name="activator">
    <div v-if="slides.length > 1">
      <label class="carousel__control carousel__control--backward"
             :for="selectedIndex === 0 ? slides[slides.length - 1].page : slides[selectedIndex - 1].page" />
      <label class="carousel__control carousel__control--forward"
             :for="selectedIndex === slides.length - 1 ? slides[0].page : slides[selectedIndex + 1].page" />
    </div>
    <li v-for="(slide, index) in slides" :key="slide.imageSrc" class="carousel__slide"
        :style="{
          backgroundImage: 'url(' + require('@/assets/img/' + slide.imageSrc) + ')',
          transform: 'translateX(' + (index - selectedIndex) * 100 + '%)'
        }">
      <router-link :to="{ name: slide.page }">
        <h1>{{ slide.title }}</h1>
      </router-link>
    </li>
    <div class="carousel__indicators">
      <label v-for="slide in slides" :key="slide.page"
             class="carousel__indicator" :for="slide.page" />
    </div>
  </ul>
</template>

<script>
  export default {
    name: "CarouselFullScreen",
    props: {
      slides: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        selectedIndex: 0
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
        switch (direction){
          case "left":
            this.increment();
            break;
          case "right":
            this.decrement();
            break;
        }
      },
      handleKey(event) {
        switch (event.code) {
          case "ArrowLeft":
            this.decrement();
            break;
          case "ArrowRight":
            this.increment();
            break;
        }
      },
      increment() {
        this.selectedIndex === this.slides.length - 1 ? this.selectedIndex = 0 : this.selectedIndex ++;
      },
      decrement() {
        this.selectedIndex === 0 ? this.selectedIndex = this.slides.length - 1 : this.selectedIndex--;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    height: calc(100vh - 56px);
    width: 100vw;
    margin: 0;
    overflow: hidden;
    text-align: center;
    position: relative;
    padding: 0;
    list-style: none;
  }

  .carousel__activator {
    display: none;
  }

  /* CHECKED -------------------------------------------------------------------------------------------------------- */

  .carousel__activator:checked ~ .carousel__slide {
    transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    display: flex;
    justify-content: center;
  }

  .carousel__activator:checked ~ .carousel__indicators .carousel__indicator {
    opacity: 1;
  }

  /* UNCHECKED ------------------------------------------------------------------------------------------------------ */

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

  .carousel__indicators {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }

  .carousel__indicator {
    height: 15px;
    width: 15px;
    border-radius: 100%;
    display: inline-block;
    z-index: 2;
    cursor: pointer;
    opacity: 0.35;
    margin: 0 2.5px 0 2.5px;
  }

  .carousel__indicator:hover {
    opacity: 0.75;
  }

  .carousel__track .carousel__slide {
    display: block;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
  }

  .carousel--scale .carousel__slide {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .carousel__slide {
    height: 100%;
    position: absolute;
    overflow-y: auto;
    opacity: 0;
  }

  * {
    box-sizing: border-box;
  }

  .carousel__slide {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel--thumb .carousel__indicator {
    height: 30px;
    width: 30px;
  }

  h1 {
    color: #FFFFFF;
    font-size: 44px;
    line-height: 50px;
    text-align: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    width: 80%
  }

  .carousel__indicator {
    background-color: #fafafa;
  }

  .carousel__slide,
  .carousel--thumb .carousel__indicators .carousel__indicator {
    background-size: cover;
    background-position: center;
  }

  body {
    overflow: hidden;
  }
</style>
