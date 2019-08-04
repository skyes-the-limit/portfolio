<template>
  <div>
    <img :src="content.sources[0]">
  </div>
</template>

<script>
  export default {
    name: "PreviewCard",
    props: {
      content: {
        type: Object,
        default: function () {
          return {
            date: '',
            medium: '',
            description: '',
            sources: []
          }
        }
      }
      /*  Expect content to be an Object with the following fields:
            * String date         (creation date of the piece in format YYYY-MM-DD)
            * String medium       (medium or programs used to create the piece)
            * String description  (a description of the piece)
            * String[] sources    (image/video sources to display)
      */
    },
  }
</script>

<style scoped>
  img {
    width: 20vw;
    height: 20vh;
    object-fit: cover;
  }
</style>
