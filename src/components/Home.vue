<template>
  <div>
    <div v-if="showFeatured" class="featuredLayout">
      <featured />
      <main-categories />
    </div>
    <main-categories v-else />
    <additional-work />
  </div>
</template>

<script>
import Featured from '@/components/Featured.vue';
import MainCategories from '@/components/MainCategories.vue';
import AdditionalWork from '@/components/AdditionalWork.vue';
import store from '@/store';

export default {
  name: "Home",
  components: { Featured, MainCategories, AdditionalWork },
  data() {
    return {
      showFeatured: store.getters.featuredWork ? store.getters.featuredWork.length > 0 : false
    };
  },
};
</script>

<style scoped>
.featuredLayout {
  display: flex;
  width: 100vw;
  height: 100%;
}

.featuredLayout:nth-child(0) {
  width: 70%;
}

.featuredLayout:nth-child(1) {
  width: 30%;
}

</style>