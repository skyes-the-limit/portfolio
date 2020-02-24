<template>
  <div class="container">
    <pdf :src="require('@/assets/doc/Arielle_Bishop_Resume.pdf')" class="pdf" />
  </div>
</template>

<script>
  import {isMobile} from 'mobile-device-detect';
  import pdf from 'vue-pdf'

  export default {
    name: 'About',
    components: { pdf },
    data() {
      return {
        isMobile: isMobile
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    max-width: 90%;
    margin: 5%;
  }

  .pdf {
    width: 100%;
    max-width: 100%;
  }

  span {
    margin: 0 2rem;
    max-width: 26rem;
  }

  h1 {
    margin: 0.5em 0;
  }
</style>
