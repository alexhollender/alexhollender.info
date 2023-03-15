import Wiki2023 from './projects/Wiki2023';
import Howlerz from './projects/Howlerz';
import CookingTimers from './projects/CookingTimers';
import Dispose from './projects/Dispose';
import Onia from './projects/Onia';
import AltSchool from './projects/AltSchool';
import CreateBuildDestroy from './projects/CreateBuildDestroy';
import WikipediaForKids from './projects/WikipediaForKids';
import Misc from './projects/Misc';

let projects = [
  {
    path: 'wiki-2023',
    component: Wiki2023,
    name: 'Wikipedia 2023 redesign',
    description: 'various improvements to the desktop interface of Wikipedia'
  },
  {
    path: 'wiki-kids',
    component: WikipediaForKids,
    name: 'Wikipedia for younger learners',
    description: 'explorations of making Wikipedia more accessible for younger learners'
  },
  {
    path: 'cooking-timers',
    component: CookingTimers,
    name: 'Cooking timers',
    description: 'a basic timer tool, built with react.js'
  },
  {
    path: 'howlerz',
    component: Howlerz,
    name: 'Howlerz',
    description: 'a website where people bought the Howlerz digital art collection'
  },
  {
    path: 'dispose',
    component: Dispose,
    name: 'DISPOSE',
    description: 'an art project / online magazine involving disposable cameras'
  },
  {
    path: 'createbuilddestroy',
    component: CreateBuildDestroy,
    name: 'Create Build Destroy',
    description: 'a clothing company i ran with a few friends in college'
  },
  {
    path: 'altschool',
    component: AltSchool,
    name: 'AltSchool',
    description: 'an education technology startup i worked for in san francisco'
  },
  {
    path: 'onia',
    component: Onia,
    name: 'Onia',
    description: 'my first job out of college, designer for a clothing company in nyc'
  },
  {
    path: 'misc',
    component: Misc,
    name: 'Misc.',
    description: 'other bits and pieces'
  }
];

export function getProjects() {
  return projects;
}
