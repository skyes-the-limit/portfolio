<template>
  <div v-if="newLayoutEnabled">
    <featured />
    <main-categories />
    <additional-work />
  </div>
  <carousel-full-screen v-else :slides="carouselProps" />
</template>

<script>
import Featured from '@/components/Featured.vue';
import MainCategories from '@/components/MainCategories.vue';
import AdditionalWork from '@/components/AdditionalWork.vue';
import CarouselFullScreen from "@/components/widgets/CarouselFullScreen.vue";
import store from '@/store';

const newLayoutEnabled = store.getters.newLayoutEnabled
const carouselProps = store.getters.carouselProps

export default {
  name: "Home",
  components: { Featured, MainCategories, AdditionalWork, CarouselFullScreen },
  data() {
    return {
      carouselProps, newLayoutEnabled
    };
  },
};
</script>
