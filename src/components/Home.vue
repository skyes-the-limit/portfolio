<template>
  <carousel-full-screen v-bind:slides="carouselProps"/>
</template>

<script>
import CarouselFullScreen from './widgets/CarouselFullScreen.vue'

let TwoD = {
    title: "2D",
    imageSrc: ""
};
let ThreeD = {
  title: "3D",
  imageSrc: ""
};
let Video = {
  title: "Video",
  imageSrc: ""
};
let Programming = {
  title: "Programming",
  imageSrc: ""
};

export default {
  name: "Home",
  components: { CarouselFullScreen },
  data() {
    return {
      carouselProps: [TwoD, ThreeD, Video, Programming]
    }
  }
}
</script>
