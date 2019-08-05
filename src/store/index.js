import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// {
//   String date         (creation date of the piece in format YYYY-MM-DD)
//   String medium       (medium or programs used to create the piece)
//   String description  (a description of the piece)
//   String[] sources    (image sources to display)
//   String videoId      [OPTIONAL] (videoId for vimeo plugin)
// }

const illustration = [
  {
    date: "2017-11-20",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf2.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/d2a1c7a4-8a0a-4a14-af01-d494b44085dd_rw_3840.png?h=336acac0dd3819cdf4437f093a0bd026"],
    videoId: "349255791"
  },
  {
    date: "2017-11-21",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf4.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/5eea8bb5-f94f-4218-94aa-a074d85de647_rw_1920.jpg?h=06fd4da1806dcf50eaa350d9afb48ae3"]
  },
  {
    date: "2017-11-22",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf1.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/20629d64-2531-48be-b6f1-5da3d6886fc7_rw_1920.png?h=cdd6c40b6015d141b1cbe235c0ebe01f"]
  },
  {
    date: "2017-11-23",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf3.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/4892def2-d7d2-48d9-9814-21eed04fe337_rw_3840.png?h=b973ce0e4b24e8c7552b485aef2669a8"]
  },
  {
    date: "2017-11-24",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/89be024b-a7fc-45cc-bbb4-40882e063f85_rw_1920.png?h=89fb447b4b4e604ea3d4893306f636e2"]
  }
];
const animation = [];
const videography = [];
const programming = [];

export default new Vuex.Store({
  state: {
    illustration: illustration,
    animation: animation,
    videography: videography,
    programming: programming
  },
  getters: {
    illustration: state => state.illustration,
    animation: state => state.animation,
    videography: state => state.videography,
    programming: state => state.programming
  }
});