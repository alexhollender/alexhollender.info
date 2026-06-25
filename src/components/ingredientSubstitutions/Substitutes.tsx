import SubstituteCategory from './SubstituteCategory'
import { panel, panelHeading } from './styles'
import type { SubstituteCategoryGroup } from './types'

export default function Substitutes({
  groups,
}: {
  groups: SubstituteCategoryGroup[]
}) {
  return (
    <section className={panel}>
      <h2 className={panelHeading}>Substitutes</h2>
      {groups.map(({ category, items }) => (
        <SubstituteCategory key={category} category={category} items={items} />
      ))}
    </section>
  )
}
