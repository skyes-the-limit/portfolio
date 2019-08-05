<template>
  <div>
    <div v-for="(row, index) in rows" :key="index">
      
      <div v-for="card in row" :key="card.date">
        <preview-card :content="card" />
      </div>
    </div>
  </div>
</template>

<script>
  import PreviewCard from 'widgets/PreviewCard';

  // route to current page/ index as id, router can fetch index from base to render

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
      /*  Expect cards to be Array of Objects with the following fields:
            * String date         (creation date of the piece in format YYYY-MM-DD)
            * String medium       (medium or programs used to create the piece)
            * String description  (a description of the piece)
            * String[] sources    (image/video sources to display)
      */
    },
    computed: {
      rows() {
        let chunkSize = 4;
        let out = [Math.ceil(this.cards.length / chunkSize)];

        for (let i = 0; i < out.length; i++) {
          let start = i * chunkSize;
          let end = start + (chunkSize - 1);

          if (end > this.cards.length) {
            out[i] = this.cards.slice(start, end)
          } else {
            out[i] = this.cards.slice(start);
          }
        }

        return out;
      }
    }
  }
</script>

<style scoped>

</style>