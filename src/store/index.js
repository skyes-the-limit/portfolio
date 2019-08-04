import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// {
//   String date         (creation date of the piece in format YYYY-MM-DD)
//   String medium       (medium or programs used to create the piece)
//   String description  (a description of the piece)
//   String[] sources    (image/video sources to display)
// }

const twoD = [
  {
    date: "2017-11-20",
    medium: "Adobe Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["https://pro2-bar-s3-cdn-cf2.myportfolio.com/b8aed75f96e3f709b52b4bb30e44ee8d/d2a1c7a4-8a0a-4a14-af01-d494b44085dd_rw_3840.png?h=336acac0dd3819cdf4437f093a0bd026"]
  }
];
const threeD = [];
const video = [];
const programming = [];

export default new Vuex.Store({
  state: {
    twoD: twoD,
    threeD: threeD,
    video: video,
    programming: programming
  },
  getters: {
    twoD: state => state.twoD,
    threeD: state => state.threeD,
    video: state => state.video,
    programming: state => state.programming
  }
});