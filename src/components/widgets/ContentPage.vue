<template>
  <div class="content-container">
    <div v-for="(row, index) in rows" :key="index" class="preview-row">
      <preview-card v-for="card in row" :key="card.date" :content="card" />
    </div>
  </div>
</template>

<script>
  import PreviewCard from '@/components/widgets/PreviewCard';

  export default {
    name: "ContentPage",
    components: { PreviewCard },
    props: {
      cards: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    computed: {
      rows() {
        let chunkSize = 4.0;
        let size = Math.ceil(this.cards.length  / chunkSize);
        let out = [];

        for (let i = 0; i < size; i++) {
          let start = i * chunkSize;
          let end = start + chunkSize;

          if (end < this.cards.length) {
            out.push(this.cards.slice(start, end));
          } else {
            out.push(this.cards.slice(start));
          }
        }

        return out;
      }
    }
  }
</script>

<style scoped>
  .preview-row {
    display: flex;
    justify-content: space-around;
  }
</style>
