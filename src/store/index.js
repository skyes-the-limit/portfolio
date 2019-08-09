import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// {
//   String date         (creation date of the piece in format MM-DD-YYYY)
//   String medium       (medium or programs used to create the piece)
//   String description  (a description of the piece)
//   String[] imageSources (image sources to display)
//   String videoSources (videoIds for vimeo plugin)
//   String github       (end of link to github repo/folder)
// }

const illustration = [
  {
    date: "7-22-19",
    medium: "Screenprinted Fabric",
    description: "Exploration of tagging and graffiti using sited textiles.",
    imageSources: ["2019-07-22 Screenprint (1).jpg", "2019-07-22 Screenprint (2).jpg",
      "2019-07-22 Screenprint (3).jpg", "2019-07-22 Screenprint (4).jpg",
      "2019-07-22 Screenprint (5).jpg", "2019-07-22 Screenprint (6).jpg"],
    videoSources: []
  },
  {
    date: "11-7-18",
    medium: "Photoshop & AfterEffects",
    description: "An educational video on different culture's 'Halloween-esque' holidays.\nMade in collaboration with Ryan Nuz & Raveena Jain.",
    imageSources: ["2018-11-07 Edutainment.png"],
    videoSources: [""] // TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "3-20-18",
    medium: "AfterEffects",
    description: "Lyric video focusing on transforming audio into visual representations.",
    imageSources: ["2018-03-20 Lyrics.png"],
    videoSources: ["352082622"]
  },
  {
    date: "3-13-18",
    medium: "Photoshop & Premiere",
    description: "Sci-fi animatic about tense family relations\nMade in collaboration with Sophia Cheon.",
    imageSources: ["2018-03-13 Animatic.png"],
    videoSources: ["352082394"]
  },
  {
    date: "11-20-17",
    medium: "Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    imageSources: ["2017-11-20 Patterns.png"],
    videoSources: []
  },
  {
    date: "11-2-17",
    medium: "Photoshop",
    description: "Collage experiment with texture.",
    imageSources: ["2017-11-02 Texture.png"],
    videoSources: []
  },
  {
    date: "10-30-17",
    medium: "Photoshop",
    description: "Study on different modes of drawing.",
    imageSources: ["2017-10-30 Modes.png"],
    videoSources: []
  },
  {
    date: "10-5-17",
    medium: "Illustrator",
    description: "Portrait of Ruby Rose.",
    imageSources: ["2017-10-05 Ruby Rose.png"],
    videoSources: []
  },
  {
    date: "9-25-17",
    medium: "Illustrator",
    description: "Composition of only squares.",
    imageSources: ["2017-09-25 Squares.png"],
    videoSources: []
  },
  {
    date: "9-21-17",
    medium: "Illustrator",
    description: "Study on geometric minimalism.",
    imageSources: ["2017-09-21 Prints.png"],
    videoSources: []
  },
  {
    date: "4-14-16",
    medium: "Photoshop",
    description: "Drawing inspired by Bioware role playing video games.",
    imageSources: ["2016-04-14 Tarot.jpg"],
    videoSources: []
  },
  {
    date: "3-22-16",
    medium: "Graphite",
    description: "Portrait of Richard Dawkins.",
    imageSources: ["2016-03-22 Dawkins.png"],
    videoSources: []
  }
];
const animation = [
  {
    date: "12-14-18",
    medium: "Maya",
    description: "Short talent show from an animated character.",
    imageSources: ["2018-12-14 Talent Show.png"],
    videoSources: ["352084087"]
  },
  {
    date: "3-16-17",
    medium: "3DS Max",
    description: "Experiment with rain particle generator.",
    imageSources: ["2017-03-16 Rain.png"],
    videoSources: ["352081875"]
  },
  {
    date: "2-15-17",
    medium: "3DS Max",
    description: "Experiment with fire particle effect.",
    imageSources: ["2017-02-15 Campfire.jpg"],
    videoSources: [""] //TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "1-13-17",
    medium: "3DS Max",
    description: "First animation on a rigged character.",
    imageSources: ["2017-01-13 Captain Chunk.png"],
    videoSources: ["352081642"]
  },
  {
    date: "11-18-16",
    medium: "3DS Max",
    description: "Character model based on Castle Crashers.",
    imageSources: ["2016-11-18 Castle Crasher.jpg"],
    videoSources: []
  },
  {
    date: "10-7-16",
    medium: "3DS Max",
    description: "Simple lighting & texturing demo.",
    imageSources: ["2016-10-07 Lamp.jpg"],
    videoSources: []
  }
];
const videography = [
  {
    date: "9-25-18",
    medium: "Whiteboard & Premiere",
    description: "A variant on the 'chalk talk' method of animation.\nMade in collaboration with Ryan Nuz & Raveen Jain",
    imageSources: ["2018-09-25 Chalk Talk.png"],
    videoSources: ["352083851"]
  },
  {
    date: "9-19-18",
    medium: "Clay & Premiere",
    description: "Claymation built from visualizing cartoon soundtrack.",
    imageSources: ["2018-09-19 Claymation.png"],
    videoSources: ["352083588"]
  },
  {
    date: "5-23-18",
    medium: "Premiere",
    description: "Short interview of a Toronto local named James.",
    imageSources: ["2018-05-23 Profile.png"],
    videoSources: [""] //TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "4-23-18",
    medium: "Premiere",
    description: "An impressionistic recollection of a season of dance.",
    imageSources: ["2018-04-23 Sum.png"],
    videoSources: ["352082744"]
  },
  {
    date: "2-26-18",
    medium: "Premiere",
    description: "Short study on performance.",
    imageSources: ["2018-02-26 Twister.png"],
    videoSources: ["352082020"]
  }
];
const programming = [
  {
    date: "7-29-19",
    medium: "Processing",
    description: "Using google image search as an input, render images via various shapes.",
    imageSources: ["2019-07-29 Simple Image Processing (1).png", "2019-07-29 Simple Image Processing (2).png",
      "2019-07-29 Simple Image Processing (3).png", "2019-07-29 Simple Image Processing (4).png",
      "2019-07-29 Simple Image Processing (5).png", "2019-07-29 Simple Image Processing (6).png"],
    videoSources: [],
    github: "creative-coding/tree/master/OutsideData"
  },
  {
    date: "7-26-19",
    medium: "Processing",
    description: "Made in processing and then used to control the LED facade on the Ars Electronica Center in Linz, Austria.",
    imageSources: ["2019-07-26 Austauschstadt (1).png", "2019-07-26 Austauschstadt (2).png"],
    videoSources: [""], // TODO upload to vimeo
    github: "creative-coding/tree/master/FacadePortal"
  },
  {
    date: "7-14-19",
    medium: "Processing",
    description: "Tessellating hexagons based on Perlin Noise.",
    imageSources: ["2019-07-14 Generative Tessellations.png"],
    videoSources: [""], //TODO: upload to vimeo
    github: "creative-coding/tree/master/GenerativeDesign"
  },
  {
    date: "7-6-19",
    medium: "Processing",
    description: "Allows users to draw with complex polygons.",
    imageSources: ["2019-07-06 Drawing Machine.png"],
    videoSources: [],
    github: "creative-coding/tree/master/DrawingMachine"
  },
  {
    date: "6-28-19",
    medium: "Java | Vue.JS | PostgreSQL",
    description: "Internal tool designed and implemented during co-op at Chewy for managing their Ship Route data.",
    imageSources: ["2019-06-28 Ship Route Manager (1).png", "2019-06-28 Ship Route Manager (2).png",
      "2019-06-28 Ship Route Manager (3).png", "2019-06-28 Ship Route Manager (4).png",
      "2019-06-28 Ship Route Manager (5).png", "2019-06-28 Ship Route Manager (6).png",
      "2019-06-28 Ship Route Manager (7).png", "2019-06-28 Ship Route Manager (8).png",
      "2019-06-28 Ship Route Manager (9).png", "2019-06-28 Ship Route Manager (10).png",
      "2019-06-28 Ship Route Manager (11).png", "2019-06-28 Ship Route Manager (12).png",
      "2019-06-28 Ship Route Manager (13).png", "2019-06-28 Ship Route Manager (14).png",
      "2019-06-28 Ship Route Manager (15).png", "2019-06-28 Ship Route Manager (16).png",
      "2019-06-28 Ship Route Manager (17).png", "2019-06-28 Ship Route Manager (18).png"],
    videoSources: []
  },
  {
    date: "12-13-18",
    medium: "Java",
    description: "A simplified animation editing interface.",
    imageSources: ["2018-12-13 Animator.png"],
    github: "animator",
    videoSources: []
  },
  {
    date: "6-3-18",
    medium: "Unity",
    description: "Virtual Reality game which uses gaze direction to solve basic puzzles.",
    imageSources: ["2018-06-03 Find Drake.png"],
    videoSources: [""] //TODO: upload to vimeo
  },
  {
    date: "3-27-18",
    medium: "Java",
    description: "A recreation of the Microsoft classic Minesweeper",
    imageSources: ["2018-03-27 Minesweeper.png"],
    videoSources: []
  }
];

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
