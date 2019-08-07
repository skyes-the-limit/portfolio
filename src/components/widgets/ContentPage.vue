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
      /*  Expect cards to be Array of Objects with the following fields:
            * String date         (creation date of the piece in format YYYY-MM-DD)
            * String medium       (medium or programs used to create the piece)
            * String description  (a description of the piece)
            * String[] imageSources    (image/video sources to display)
      */
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
