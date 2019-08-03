<template>
  <carousel-full-screen v-bind:slides="carouselProps"/>
</template>

<script>
import CarouselFullScreen from './widgets/CarouselFullScreen.vue'

let TwoD = {
    title: '2D',
    imageSrc: '../../assets/images/2d.jpg'
};
let ThreeD = {
  title: '3D',
  imageSrc: '../../assets/images/3d/jpg'
};
let Video = {
  title: 'Video',
  imageSrc: '../../assets/images/video.jpg'
};
let Programming = {
  title: 'Programming',
  imageSrc: '../../assets/images/programming.jpeg'
};

export default {
  name: 'Home',
  components: { CarouselFullScreen },
  data() {
    return {
      carouselProps: [TwoD, ThreeD, Video, Programming]
    }
  }
}
</script>
