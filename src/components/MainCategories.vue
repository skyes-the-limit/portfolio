<template>
  <div>
    <h2>Main Categories</h2>
    <div class="content-container">
      <page-preview
        v-for="(page, index) in pages"
        :key="index"
        :content="page"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import PagePreview from "./widgets/PagePreview.vue";

export default {
  name: "MainCategories",
  components: { PagePreview },
  data() {
    return {
      pages: store.getters.mainCategories,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 8px;
}

.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 16px 0;
}
</style>
