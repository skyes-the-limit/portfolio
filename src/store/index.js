import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// {
//   String date         (creation date of the piece in format MM-DD-YYYY)
//   String medium       (medium or programs used to create the piece)
//   String description  (a description of the piece)
//   String[] sources    (image sources to display)
//   String videoId      [OPTIONAL] (videoId for vimeo plugin)
// }

const illustration = [
  {
    date: "5-19-2018",
    medium: "Adobe Photoshop",
    description: "Psycho-geographical map of Toronto's financial district.",
    sources: ["2018-05-19 Psychogeographical Map.jpg"]
  },
  {
    date: "11-20-2017",
    medium: "Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    sources: ["2017-11-20 Patterns.png"]
  },
  {
    date: "11-2-2017",
    medium: "Photoshop",
    description: "Collage experiment with texture.",
    sources: ["2017-11-02 Texture.png"]
  },
  {
    date: "10-30-2017",
    medium: "Photoshop",
    description: "Study on different modes of drawing.",
    sources: ["2017-10-30 Modes.png"]
  },
  {
    date: "10-5-2017",
    medium: "Illustrator",
    description: "Portrait of Ruby Rose.",
    sources: ["2017-10-05 Ruby Rose.png"]
  },
  {
    date: "9-25-2017",
    medium: "Illustrator",
    description: "Composition of only squares.",
    sources: ["2017-09-25 Prints.png"]
  },
  {
    date: "9-21-2017",
    medium: "Illustrator",
    description: "Study on geometric minimalism.",
    sources: ["2017-09-2 Prints.png"]
  },
  {
    date: "4-14-2016",
    medium: "Photoshop",
    description: "Drawing inspired by Bioware role playing video games.",
    sources: ["2016-04-14 Tarot.jpg"]
  },
  {
    date: "3-17-2016",
    medium: "Graphite",
    description: "Portrait of Richard Dawkins.",
    sources: ["2016-03-17 Dawkins.png"]
  }
];
const animation = [
  {
    date: "12-14-2018",
    medium: "Maya",
    description: "Short talent show from an animated character.",
    sources: ["2018-12-14 Talent Show"],
    videoId: "352084087"
  },
  {
    date: "11-7-2018",
    medium: "Photoshop & AfterEffects",
    description: "An educational video on different culture's 'Halloween-esque' holidays.\nMade in collaboration with Ryan Nuz & Raveena Jain.",
    sources: ["2018-11-07 Edutainment.png"],
    videoId: "" // TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "9-19-2018",
    medium: "Clay & Premiere",
    description: "Claymation built from visualizing cartoon soundtrack.",
    sources: ["2018-09-19 Claymation.png"],
    videoId: "352083588"
  },
  {
    date: "3-29-2018",
    medium: "AfterEffects",
    description: "Lyric video focusing on transforming audio into visual representations.",
    sources: ["2018-03-29 Lyrics.png"],
    videoId: "352082622"
  },
  {
    date: "3-13-2018",
    medium: "Photoshop & Premiere",
    description: "Sci-fi animatic about tense family relations\nMade in collaboration with Sophia Cheon.",
    sources: ["2018-03-13 Animatic.png"],
    videoId: "352082394"
  },
  {
    date: "3-16-2017",
    medium: "3DS Max",
    description: "Experiment with rain particle generator.",
    sources: ["2017-03-16 Rain.png"],
    videoId: "352081875"
  },
  {
    date: "2-15-2017",
    medium: "3DS Max",
    description: "Experiment with fire particle effect.",
    sources: ["2017-02-15 Campfire.jpg"],
    videoId: "" //TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "1-13-2017",
    medium: "3DS Max",
    description: "First animation on a rigged character.",
    sources: ["2017-01-13 Captain Chunk.png"],
    videoId: "352081642"
  },
  {
    date: "11-18-2016",
    medium: "3DS Max",
    description: "Character model based on Castle Crashers.",
    sources: ["2016-11-18 Castle Crasher.jpg"]
  },
  {
    date: "10-7-2016",
    medium: "3DS Max",
    description: "Simple lighting & texturing demo.",
    sources: ["2016-10-07 Lamp.jpg"]
  }
  ];
const videography = [
  {
    date: "9-25-2018",
    medium: "Whiteboard & Premiere",
    description: "A variant on the 'chalk talk' method of animation.\nMade in collaboration with Ryan Nuz & Raveen Jain",
    sources: ["2018-09-25 Chalk Talk.png"],
    videoId: "352083851"
  },
  {
    date: "5-23-2018",
    medium: "Premiere",
    description: "Short interview of a Toronto local named James.",
    sources: ["2018-05-23 Profile.png"],
    videoId: "" //TODO: Upload to Vimeo when weekly limit resets
  },
  {
    date: "4-23-2018",
    medium: "Premiere",
    description: "An impressionistic recollection of a season of dance.",
    sources: ["2018-04-23 Sum.png"],
    videoId: "352082744"
  },
  {
    date: "2-26-2018",
    medium: "Premiere",
    description: "Short study on performance.",
    sources: ["2018-02-26 Twister.png"],
    videoId: "352082020"
  }
];
const programming = []; //TODO: Build github repos & add field for links.

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
