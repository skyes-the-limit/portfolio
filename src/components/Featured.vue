<template>
  <div class="featured">
    <featured-work
      v-for="(work, index) in featuredWork"
      :key="index"
      :content="work"
    />
  </div>
</template>

<script>
import FeaturedWork from "@/components/FeaturedWork.vue";
import store from "@/store";

const featuredWork = store.getters.featuredWork;

console.log(featuredWork[0]);

export default {
  name: "Featured",
  components: { FeaturedWork },
  data() {
    return { featuredWork };
  },
};
</script>
