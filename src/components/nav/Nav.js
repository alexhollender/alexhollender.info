'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { usePathname } from 'next/navigation'
import getPageType from '@/utils/getPageType'
import { useEffect } from 'react'
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

  useEffect(() => {
    // if you're on a project page
    if (segment === 'project') {
      const activeLink = document.querySelector('a.active')
      const rect = activeLink.getBoundingClientRect()
      const isBelowViewport = rect.top > window.innerHeight
      // and the nav link is below the viewport
      if (isBelowViewport) {
        // scroll it into view
        activeLink.scrollIntoView();
      }
    }
  })

  return(
    <aside className={`${s.aside} ${s[pageType]}`}>
      <nav className={s.nav}>
        <p className={s.intro}>Hey, I'm Alex. I design and build things (mostly) for the web. I recently led the redesign of Wikipedia's desktop site. Here is some of my work:</p>
        {projects.map(({ id, name, description }) =>
          <Link
            key={id}
            href={`/projects/${id}`}
            scroll={false}
            className={`${s.item} ${id === pathname && 'active'}`}
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