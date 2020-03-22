<template>
  <div class="content-container">
    <preview-card v-for="card in cards" :key="card.date" :content="card"/>
  </div>
</template>

<script>
  import PreviewCard from '@/components/widgets/PreviewCard';

  export default {
    name: "ContentPage",
    components: {PreviewCard},
    props: {
      cards: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .content-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
