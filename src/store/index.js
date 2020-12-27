import Vue from 'vue'
import Vuex from 'vuex'

import * as cgi from './cgi.json'
import * as illustration from './illustration.json';
import * as motionGraphics from './motionGraphics.json'
import * as software from './software.json'
import * as stopMotion from './stopMotion.json'
import * as technicalArt from './technicalArt.json'
import * as video from './video.json'

Vue.use(Vuex);

//   String date                       (creation date of the piece in format MM-DD-YYYY)
//   String medium                     (medium or programs used to create the piece)
//   String description                (a description of the piece)
//   String previewSource              (image source for PreviewCard)
//   String[] imageSources  [OPTIONAL] (image sources to display)
//   String[] videoSources  [OPTIONAL] (videoIds for vimeo plugin)
//   String collab          [OPTIONAL] (list of collaborators)
//   String github          [OPTIONAL] (end of link to github repo/folder)

const newLayoutEnabled = false;

const featuredWork = [
  {
    "date": "11-5-2019",
    "medium": "Maya",
    "description": "Digital recreation of a small interior space.",
    "previewSource": "2019-11-05 Interior Preview.png",
    "imageSources": [
      "2019-11-05 Interior (1).png",
      "2019-11-05 Interior (2).png"
    ]
  }
]

const carouselProps = [
  {
    page: "Illustration",
    title: "Illustration",
    imageSrc: "cover-illustration.png",
  },
  {
    page: "CGI",
    title: "CGI",
    imageSrc: "cover-cgi.png",
  },
  {
    page: "Video",
    title: "Video",
    imageSrc: "cover-video.png",
  },
  {
    page: "Software",
    title: "Software",
    imageSrc: "cover-software.png",
  },
];

const mainCategories = [
  {
    title: "Software Development",
    page: "software",
    imageSrc: "cover-software.png",
  },
  {
    title: "3D Modeling & Animation",
    page: "CGI",
    imageSrc: "cover-3d.png",
  },
  {
    title: "Technical Art",
    page: "tech-art",
    imageSrc: "cover-techart.png",
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
    newLayoutEnabled: newLayoutEnabled,
    featuredWork: featuredWork,
    carouselProps: carouselProps,
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
    newLayoutEnabled: state => state.newLayoutEnabled,
    featuredWork: state => state.featuredWork,
    carouselProps: state => state.carouselProps,
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
