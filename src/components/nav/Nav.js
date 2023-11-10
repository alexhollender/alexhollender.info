'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { usePathname } from 'next/navigation'
import getPageType from '@/utils/getPageType'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Gallery from "@/components/gallery/Gallery"
import s from './nav.module.scss'

export default function Nav() {
  // used to determine layout for <Nav>
  const segment = useSelectedLayoutSegment()
  const pageType = getPageType(segment)
  // used to determine active <Link>
  const pathname = usePathname().split('/').pop()

  return(
    <aside className={`${s.aside} ${s[pageType]}`}>
      <nav className={s.nav}>
        <p className={s.intro}>Hey, I'm Alex. I design and build things (mostly) for the web. I recently led the redesign of Wikipedia's desktop site. Here is some of my work:</p>
        {projects.map(({ id, name, description }) =>
          <Link
            key={id}
            href={`/project/${id}`}
            scroll={false}
            className={`${s.item} ${id === pathname && s.active}`}
          >
            <h2>{name}</h2>
            <p>{description}</p>
          </Link>
        )}
      </nav>
      <Gallery />
    </aside>
  )
}