'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import getPageType from '@/utils/getPageType'
import { projects } from '@/data/projects'
import Link from 'next/link'
import s from './nav.module.scss'

export default function Nav() {
  const segment = useSelectedLayoutSegment()
  const pageType = getPageType(segment)

  return(
    <aside className={`${s.aside} ${s[pageType]}`}>
      <nav className={s.nav}>
        <p className={s.intro}>Hey, I'm Alex. I design and build things (mostly) for the web. I recently led the redesign of Wikipedia's desktop site. Here is some of my work:</p>
        {projects.map(({ path, name, description }) =>
          <Link
            key={path}
            href={path}
            scroll={false}
            className={`${s.item} ${path === segment && s.active}`}
          >
            <h2>{name}</h2>
            <p>{description}</p>
          </Link>
        )}
      </nav>
    </aside>
  )
}