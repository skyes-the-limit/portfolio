<template>
  <div>
    <div v-if="showFeatured">
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
