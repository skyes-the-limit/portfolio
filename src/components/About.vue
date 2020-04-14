<template>
  <div>
    <img :src="require('@/assets/img/about-profile.png')">
    <div class="text">
      <p>I am a Boston based artist and software devleoper currently studying at Northeastern University. 
        My focus is on full-stack development of web and mobile experiences, with some design mixed in.
        I am motivated by projects that are focused on the human element, where I can have a visible impact.</p>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="require('@/assets/doc/Arielle_Bishop_Resume.pdf')"
      >Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped lang="scss">
  .text {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: calc(max(50%, 600px));
    padding: 24px;
  }
  
  img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
    object-position: right top;
    opacity: .9;
  }

  @media only screen and (max-height: 811px) {
    img {
      height: 40vh
    }
  }
</style>
