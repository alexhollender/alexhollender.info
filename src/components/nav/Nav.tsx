import { projects } from '@/data/projects'
import Link from 'next/link'

export default function Nav() {

  return(
    <div className="mt-12 border-t border-gray-text pb-24 pt-12">
      <h2 className="mb-10 text-xl">Selected Projects</h2>
      <nav className="grid grid-cols-3 gap-[var(--grid-gap)] wide:grid-cols-2 compact:grid-cols-1">
        {projects.map(({ id, name, description }) =>
          <Link
            key={id}
            href={`/projects/${id}`}
            className="max-w-md text-black no-underline transition-colors duration-300 [&_h2]:underline"
          >
            <h2>{name}</h2>
            <p>{description}</p>
          </Link>
        )}
      </nav>
    </div>
  )
}
