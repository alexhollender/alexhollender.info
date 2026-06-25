import Link from 'next/link'
import { panel, panelHeading, fontIngredient } from './styles'

const examples = [
  { id: 'dill', name: 'Dill' },
  { id: 'anise', name: 'Anise' },
  { id: 'vanilla_extract', name: 'Vanilla extract' },
  { id: 'millet', name: 'Millet' },
]

export default function Suggestions() {
  return (
    <div className={panel}>
      <h2 className={panelHeading}>For example</h2>
      <ul>
        {examples.map(({ id, name }) => (
          <Link
            key={id}
            href={`/ingredient-substitutions/${id}`}
            className="hover:text-black hover:underline active:text-neutral-300"
          >
            <li className={`py-1.5 ${fontIngredient}`}>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
