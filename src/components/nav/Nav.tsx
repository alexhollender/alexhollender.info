import { projects } from '@/data/projects'
import Link from 'next/link'

export default function Nav() {

  return(
    <div className="mt-[50px] border-t border-gray-text pb-[100px] pt-[50px]">
      <h2 className="mb-[40px] text-[20px]">Selected Projects</h2>
      <nav className="grid grid-cols-3 gap-[var(--grid-gap)] max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1">
        {projects.map(({ id, name, description }) =>
          <Link
            key={id}
            href={`/projects/${id}`}
            className="max-w-[420px] text-black no-underline transition-colors duration-300 [&_h2]:underline"
          >
            <h2>{name}</h2>
            <p>{description}</p>
          </Link>
        )}
      </nav>
    </div>
  )
}
