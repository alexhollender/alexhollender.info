import { projects } from '@/data/projects'
import Link from 'next/link'
import s from './nav.module.scss'

export default function Nav() {

  return(
    <nav className={s.nav}>
      {projects.map(({ id, name, description }) =>
        <Link
          key={id}
          href={`/projects/${id}`}
          className={s.item}
        >
          <h2>{name}</h2>
          <p>{description}</p>
        </Link>
      )}
    </nav>
  )
}