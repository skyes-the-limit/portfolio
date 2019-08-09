<template>
  <carousel-full-screen :slides="carouselProps" />
</template>

<script>
import CarouselFullScreen from '@/components/widgets/CarouselFullScreen.vue'

let illustration = {
  page: 'Illustration',
  title: "Drawing & Illustration",
  imageSrc: 'cover-illustration.png'
};
let animation = {
  page: 'Animation',
  title: "3D Modeling & Animation",
  imageSrc: 'cover-animation.png'
};
let videography = {
  page: 'Videography',
  title: "Videography & Performance Art",
  imageSrc: 'cover-videography.png'
};
let programming = {
  page: 'Programming',
  title: "Programming & Interactive Art",
  imageSrc: 'cover-programming.png'
};

export default {
  name: 'Home',
  components: { CarouselFullScreen },
  data() {
    return {
      carouselProps: [illustration, animation, videography, programming]
    }
  }
}
</script>
