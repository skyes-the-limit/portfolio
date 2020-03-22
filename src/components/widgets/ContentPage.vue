<template>
  <div class="content-container">
    <div v-for="card in cards" :key="card.date" class="card">
      <preview-card :content="card"/>
    </div>
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

  .card {
    margin-top: 2vw;
    min-width: fit-content;
  }
</style>
