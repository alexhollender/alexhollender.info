import SubstituteItem from './SubstituteItem'
import { capitalize } from './categorize'
import type { Substitute } from './types'

interface Props {
  category: string
  items: Substitute[]
}

export default function SubstituteCategory({ category, items }: Props) {
  return (
    <ul className="mb-9 last:mb-0 [&:only-of-type]:border-t [&:only-of-type]:border-gray-300 [&:only-of-type>h3]:hidden">
      <h3 className="inline-block rounded-xl border border-black px-2.5 py-1 font-sans text-sm text-black">
        {capitalize(category)}
      </h3>
      {items.map((item) => (
        <SubstituteItem key={item.substituteName} {...item} />
      ))}
    </ul>
  )
}
