<template>
  <carousel-full-screen :slides="carouselProps" />
</template>

<script>
import CarouselFullScreen from '@/components/widgets/CarouselFullScreen.vue'

let illustration = {
  page: 'Illustration',
  title: "Illustration",
  imageSrc: 'cover-illustration.png'
};
let cgi = {
  page: 'CGI',
  title: "CGI",
  imageSrc: 'cover-cgi.png'
};
let video = {
  page: 'Video',
  title: "Video",
  imageSrc: 'cover-video.png'
};
let software = {
  page: 'Software',
  title: "Software",
  imageSrc: 'cover-software.png'
};

export default {
  name: 'Home',
  components: { CarouselFullScreen },
  data() {
    return {
      carouselProps: [illustration, cgi, video, software]
    }
  }
}
</script>
