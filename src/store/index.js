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
    date: "",
    medium: "",
    description: "",
    sources: [""],
    videoId: ""
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
