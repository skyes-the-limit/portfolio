<template>
  <div class="featured">
    <div v-for="(work, index) in featuredWork" v-bind:key="index">
      <featured-work :content="work"  />
    </div>
  </div>
</template>

<script>
import FeaturedWork from "@/components/FeaturedWork.vue";
import store from "@/store";

const featuredWork = store.getters.featuredWork;

export default {
  name: "Featured",
  components: { FeaturedWork },
  data() {
    return { featuredWork };
  },
};
</script>
