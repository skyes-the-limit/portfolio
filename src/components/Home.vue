<template>
  <carousel-full-screen :slides="carouselProps" />
</template>

<script>
import CarouselFullScreen from 'widgets/CarouselFullScreen.vue'

let illustration = {
  page: 'Illustration',
  title: "Drawing & Illustration",
  imageSrc: 'https://parkwestgallery-104d1.kxcdn.com/wp-content/uploads/2017/06/person-woman-art-creative-1.jpg'
};
let animation = {
  page: 'Animation',
  title: "3D Modeling & Animation",
  imageSrc: 'http://static1.squarespace.com/static/5320f582e4b0fd524adcad9c/5321b29be4b0410adbe0c3bd/5787d6be46c3c42dc371bc27/1468605912448/3d+modelling.JPG?format=1500w'
};
let video = {
  page: 'Video',
  title: "Videography & Performance Art",
  imageSrc: 'https://nofilmschool.com/sites/default/files/styles/article_wide/public/film-lighting-technique.jpg?itok=XtlXHbnN'
};
let programming = {
  page: 'Programming',
  title: "Programming & Interactive Art",
  imageSrc: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1106530967%2F960x0.jpg%3Ffit%3Dscale'
};

export default {
  name: 'Home',
  components: { CarouselFullScreen },
  data() {
    return {
      carouselProps: [illustration, animation, video, programming]
    }
  }
}
</script>
