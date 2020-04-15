<template>
  <div class="about-container">
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
  .about-container {
    height: calc(100vh - 56px);
    padding: 0;
  }

  .text {
    position: absolute;
    top: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 575px;
    padding: 16px;
    margin: 16px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  img {
    width: 100vw;
    height: calc(100vh - 56px);
    object-fit: cover;
    object-position: right top;
    opacity: .9;
  }

  @media only screen and (max-height: 665px) {
    .text {
      top: 40%;
    }
  }

  @media only screen and (max-height: 810px) {
    .text {
      top: 55%;
    }
  }

  @media only screen and (min-width: 750px) {
    .text {
      left: 10%;
    }
  }

  @media only screen and (min-width: 1050px) {
    .text {
      left: 20%;
    }
  }
</style>
