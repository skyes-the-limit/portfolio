import Vue from 'vue'
import Vuex from 'vuex'

import * as cgi from './cgi.json'
import * as illustration from './illustration.json';
import * as motionGraphics from './motionGraphics.json'
import * as software from './software.json'
import * as stopMotion from './stopMotion.json'
import * as technicalArt from './technicalArt.json'
import * as video from './video.json'

//   All json content should be formatted as follows:
//   String date                       (creation date of the piece in format MM-DD-YYYY)
//   String medium                     (medium or programs used to create the piece)
//   String description                (a description of the piece)
//   String previewSource              (image source for PreviewCard)
//   String[] imageSources  [OPTIONAL] (image sources to display)
//   String[] videoSources  [OPTIONAL] (videoIds for vimeo plugin)
//   String collab          [OPTIONAL] (list of collaborators)
//   String github          [OPTIONAL] (end of link to github repo/folder)

Vue.use(Vuex);

const featuredWork = [
  {
    "title": "Capstone Project",
    "description": "This is a long and detailed description of a project that I likely spent months of my life on. I was dedicated. It's worth explaining exactly why it's just so cool that I made this. In fact, it's even possible that the description go on for multiple lines.",
    "imageSources": [
      "2019-11-05 Interior (1).png",
      "2019-11-05 Interior (2).png"
    ],
    // "videoSources": [
    //   "352084087"
    // ]
  },
  {
    "title": "Identical Project",
    "description": "Effort was made and this was probable inspired by something. Modeled in Maya, simulated in Houdini then ported into Unreal Engine.",
    "imageSources": [
      "2019-11-05 Interior (1).png",
      "2019-11-05 Interior (2).png"
    ],
    "videoSources": [
      "352084087"
    ],
    "collab": "likely nobody",
    "github": "you-in"
  }
]

const mainCategories = [
  {
    title: "Software Development",
    page: "software",
    imageSrc: "cover-software.png",
  },
  {
    title: "3D Modeling + Animation",
    page: "CGI",
    imageSrc: "cover-software.png",
    // imageSrc: "cover-3d.png",
  },
  {
    title: "Technical Art",
    page: "tech-art",
    imageSrc: "cover-software.png",
    // imageSrc: "cover-techart.png",
  }
];

const subCategories = [
  {
    title: "Illustration",
    page: "illustration",
    imageSrc: "cover-illustration.png",
  },
  {
    title: "Motion Graphics",
    page: "motion-graphics",
    imageSrc: "cover-motiongraphics.png",
  },
  {
    title: "Stop Motion",
    page: "stop-motion",
    imageSrc: "cover-stopmotion.png",
  },
  {
    title: "Videography",
    page: "video",
    imageSrc: "cover-video.png",
  },
];

export default new Vuex.Store({
  state: {
    featuredWork: featuredWork,
    mainCategories: mainCategories,
    subCategories: subCategories,
    cgi: cgi.list,
    illustration: illustration.list,
    motionGraphics: motionGraphics.list,
    software: software.list,
    stopMotion: stopMotion.list,
    technicalArt: technicalArt.list,
    video: video.list
  },
  getters: {
    featuredWork: state => state.featuredWork,
    mainCategories: state => state.mainCategories,
    subCategories: state => state.subCategories,
    cgi: state => state.cgi,
    illustration: state => state.illustration,
    motionGraphics: state => state.motionGraphics,
    software: state => state.software,
    stopMotion: state => state.stopMotion,
    technicalArt: state => state.technicalArt,
    video: state => state.video
  }
});
