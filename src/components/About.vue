<template>
  <div class="container">
    <pdf :src="require('@/assets/doc/Arielle_Bishop_Resume.pdf')" class="pdf" />
  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'About',
    components: { pdf }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }

  .pdf {
    width: 100%;
  }
</style>
