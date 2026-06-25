import { formatName } from './categorize'
import { fontSubstitute, fontNote } from './styles'
import type { Substitute } from './types'

export default function SubstituteItem({
  substituteName,
  proportion,
  note,
  index,
}: Substitute) {
  return (
    <li
      data-index={index}
      className="border-b border-[#ccc] py-[16px] [&:has(.proportion)_.name]:mb-[6px] [&:has(.note)_.name]:mb-[6px] [&:has(.proportion):has(.note)_.proportion]:mb-[6px]"
    >
      {/* substituteName may contain <span> wrapping a parenthetical */}
      <p
        className={`name ${fontSubstitute} [&_span]:font-normal`}
        dangerouslySetInnerHTML={{ __html: formatName(substituteName) }}
      />
      {proportion ? (
        <p className={`proportion italic ${fontNote}`}>{proportion}</p>
      ) : null}
      {note ? <p className={`note ${fontNote}`}>{note}</p> : null}
    </li>
  )
}
