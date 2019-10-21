<template>
  <div class="content-container">
    <div v-if="isMobile">
      <div v-for="card in cards" :key="card.date" class="preview-row">
        <preview-card :content="card"/>
      </div>
    </div>
    <div v-else>
      <div v-for="(row, index) in rows" :key="index" class="preview-row">
        <preview-card v-for="card in row" :key="card.date" :content="card"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { isMobile } from 'mobile-device-detect';
  import PreviewCard from '@/components/widgets/PreviewCard';

  export default {
    name: "ContentPage",
    components: {PreviewCard},
    data() {
      return {
        isMobile: isMobile
      }
    },
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
        let size = Math.ceil(this.cards.length / chunkSize);
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
