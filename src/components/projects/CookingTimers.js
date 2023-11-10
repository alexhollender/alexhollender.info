import Link from "next/link"
import Image from "next/image"
import gif from "@public/media/cooking-timers/cookingTimers.gif"

export default function CookingTimers() {
  return (
    <section>
      <p>Around 2018 I inched my way from designing and front-end web development, to building web apps. I took a general JavaScript class, then took a React.js class. This is a simple app I designed and built using React. You can set & delete timers, and you can also name them.</p>
      <Link href="http://cookingtimers.net/" target="_blank" rel="noreferrer">cookingtimers.net</Link>
      <Image 
        src={gif}
        alt="GIF of cookingtimers.net being used"
        priority
        className="shadow"
      />
    </section>
  )
}