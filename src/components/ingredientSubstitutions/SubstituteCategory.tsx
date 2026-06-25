import SubstituteItem from './SubstituteItem'
import { capitalize } from './categorize'
import type { Substitute } from './types'

interface Props {
  category: string
  items: Substitute[]
}

export default function SubstituteCategory({ category, items }: Props) {
  return (
    <ul className="mb-[36px] last:mb-0 [&:only-of-type]:border-t [&:only-of-type]:border-[#ccc] [&:only-of-type>h3]:hidden">
      <h3 className="inline-block rounded-[13px] border border-black px-[10px] py-[4px] font-sans text-[14px] text-black">
        {capitalize(category)}
      </h3>
      {items.map((item) => (
        <SubstituteItem key={item.substituteName} {...item} />
      ))}
    </ul>
  )
}
