import wiki23Img from '@public/media/wiki-2023/comingsoon.jpg'
import ingSubsImg from "@public/media/ingredient-substitutions/ingredientSubstitutions.gif"
import ckTmrsImg from "@public/media/cooking-timers/cookingTimers.gif"
import altSchImg from "@public/media/altschool/altschool_13.jpg"
import dspImg from "@public/media/dispose/dispose_01.jpg"
import hwlzImg from "@public/media/howlerz/howlerz_01.jpg"
import oniaImg from "@public/media/onia/Onia_04.jpg"
import cbdImg from "@public/media/createbuilddestroy/createbuilddestroy_07_1.jpg"
import miscImg from "@public/media/miscellaneous/misc1_1350.jpg"

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
    id: 'ingredient-substitutions',
    name: 'Ingredient substitutions',
    description: 'A basic ingreident substitution lookup tool',
    image: ingSubsImg,
    component: 'IngredientSubstitutions'
  },
  {
    id: 'cooking-timers',
    name: 'Cooking timers',
    description: 'A basic timer tool',
    image: ckTmrsImg,
    component: 'CookingTimers'
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