import Image from "next/image"
import ProjectLink from "./ProjectLink"
import ProjectInfo from "./ProjectInfo"
import StickyColumn from "./StickyColumn"
import timers from "@public/media/projects/cooking-timers/cookingTimers.gif"
import ingSubs from "@public/media/projects/ingredient-substitutions/ingredientSubstitutions.gif"

export default function CookingTools() {
  return (
    <>
    <StickyColumn>
      <ProjectInfo items={[
        'Role: Designer & Developer',
        'Self-directed / side project',
      ]} />

      <p className="mb-5">Around 2018 I inched my way from designing and front-end web development, to building simple web apps. I took a JavaScript class, then a React.js class, and recently have learned Next.js. I also do a lot of cooking, so as I was thinking of things to build cooking-related tools came to mind.</p>
      <p className="mb-5">The first thing is just a straight forward timer tool. You can set as many as you want, and optionally name them.</p>
      <ProjectLink href="/cooking-timers" target="_blank">cooking timers</ProjectLink>
      <hr />
      <p className="mb-5">The second one is a little more involved. When cooking I often need to look up substitutions for ingredients. I created a database of common ingredient subsitutions, and then a basic search experience. I want to add the ability for other people to recommend additional substitutes, and upvote/downvote. I also want to rebuild it with Next.js so I can have unique server-rendered metadata for each page.</p>
      <ProjectLink href="/ingredient-substitutions" target="_blank">ingredient substitutions</ProjectLink>
    </StickyColumn>
    <section>
      <Image
        src={timers}
        alt="GIF of cookingtimers.net being used"
        priority
        className="shadow"
      />
      <Image
        src={ingSubs}
        alt="GIF of ingredientsubstitutions.net being used"
        priority
        className="shadow"
      />
    </section>
    </>
  )
}
