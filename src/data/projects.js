import wiki23Img from '@public/media/projects/wiki-2023/comingsoon.jpg'
import ingSubsImg from "@public/media/projects/ingredient-substitutions/ingredientSubstitutions.gif"
import ckTmrsImg from "@public/media/projects/cooking-timers/cookingTimers.gif"
import altSchImg from "@public/media/projects/altschool/altschool_13.jpg"
import dspImg from "@public/media/projects/dispose/dispose_01.jpg"
import hwlzImg from "@public/media/projects/howlerz/howlerz_01.jpg"
import oniaImg from "@public/media/projects/onia/onia_04.jpg"
import cbdImg from "@public/media/projects/createbuilddestroy/createbuilddestroy_07_1.jpg"
import miscImg from "@public/media/projects/miscellaneous/misc1_1350.jpg"

export const projects = [
  {
    id: 'wiki-2023',
    name: 'Wikipedia 2023 redesign',
    description: 'Various improvements to the desktop interface of Wikipedia (lead designer)',
    image: wiki23Img,
    component: 'Wiki2023'
  },
  {
    id: 'wiki-kids',
    name: 'Wikipedia for younger learners',
    description: 'Explorations of making Wikipedia more accessible for younger learners',
    component: 'WikiKids'
  },
  {
    id: 'cooking-tools',
    name: 'Cooking timers & Ingredient substitutions',
    description: 'Basic cooking tools, mainly to practice web development',
    image: ingSubsImg,
    component: 'CookingTools'
  },
  {
    id: 'altschool',
    name: 'AltSchool',
    description: 'An education technology startup in San Francisco (lead designer)',
    image: altSchImg,
    component: 'AltSchool'
  },
  {
    id: 'dispose',
    name: 'DISPOSE',
    description: 'An art project & online magazine involving disposable cameras (co-founder)',
    image: dspImg,
    component: 'Dispose'
  },
  {
    id: 'howlerz',
    name: 'Howlerz',
    description: 'A website I designed and built where people bought the Howlerz digital art collection',
    image: hwlzImg,
    component: 'Howlerz'
  },
  {
    id: 'onia',
    name: 'Onia',
    description: 'A clothing company in NYC (lead designer & my first job out of college)',
    image: oniaImg,
    component: 'Onia'
  },
  {
    id: 'create-build-destroy',
    name: 'Create Build Destroy',
    description: 'A clothing company I ran with a few friends in college',
    image: cbdImg,
    component: 'CreateBuildDestroy'
  },
  {
    id: 'miscellaneous',
    name: 'Misc.',
    description: 'Other bits and pieces',
    img: miscImg,
    component: 'Miscellaneous'
  }
]