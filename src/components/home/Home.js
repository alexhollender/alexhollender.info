import Link from 'next/link'
import s from './home.module.scss'

export default function Home() {

  return (
    <div className={s.intro}>
      <p>Hey, I’m Alex. I’ve been a product designer for the past 10 years. Most recently I led the <Link href="/projects/wiki-2023"><strong>Wikipedia Desktop Redesign</strong></Link>, and before that worked on Wikipedia’s mobile editing tools. Through my 5 years at Wikipedia I gained experience around <strong>designing for a global audience</strong> (300+ languages, every device imaginable), <strong>co-designing with an active community of volunteers</strong> (editors & technical contributors), <strong>designing for a large audience</strong> (~10 billion monthly pageviews), and <strong>designing around user-generated content</strong>. Full HTML/JS prototypes and UX research are integral parts of my design process.</p>

      <p>Prior to Wikipedia I was the first designer at <Link href="https://www.newyorker.com/magazine/2016/03/07/altschools-disrupted-education" target="_blank" rel="external"><strong>AltSchool</strong></Link> (an EdTech startup)  where I helped create a <strong>Learning Management System</strong> that empowered teachers to make more personalized curriculums and focus on whole-child education. I’ve done product design and strategy consulting for several startups, such as <Link href="https://www.lyrahealth.com/" target="_blank" rel="external"><strong>Lyra Health</strong></Link> and <Link href="https://amplify.com/" target="_blank" rel="external"><strong>Amplify</strong></Link>, and freelanced for product strategy agencies such as <Link href="https://machine.io/" target="_blank" rel="external"><strong>Machine</strong></Link> and <Link href="https://www.runyon.io/" target="_blank" rel="external"><strong>Runyon</strong></Link>. Before I got into product design I was the creative director at <Link href="https://onia.com/" target="_blank" rel="external"><strong>Onia</strong></Link>, a high-end clothing brand based in NYC.</p>

      <p>I am currently doing foundational product research and design around a new tool for recipe and food creators, tentatively called <Link href="https://recipe.site/" target="_blank" rel="external"><strong>Recipe.Site</strong></Link>.</p>

      <p className={s.contact}>Contact: alexhollender@gmail.com, or <Link href="https://www.linkedin.com/in/alex-hollender/" target="_blank" rel="external">linkedin</Link></p>
    </div>
  )
}