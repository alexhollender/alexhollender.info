import type { Substitute, SubstituteCategoryGroup } from './types'

// Group an ingredient's substitutes into a "general" bucket plus any named
// categories, preserving original order. Mirrors the original Algolia app.
export function categorizeSubstitutes(
  substitutes: Substitute[]
): SubstituteCategoryGroup[] {
  const groups: SubstituteCategoryGroup[] = [{ category: 'general', items: [] }]

  const uniqueCategories = [
    ...new Set(
      substitutes.filter((s) => s.category).map((s) => s.category as string)
    ),
  ]
  uniqueCategories.forEach((category) => groups.push({ category, items: [] }))

  substitutes.forEach((sub, index) => {
    const item = { ...sub, index }
    if (item.category) {
      const group = groups.find((g) => g.category === item.category)
      group?.items.push(item)
    } else {
      groups[0].items.push(item)
    }
  })

  // drop "general" if nothing landed in it
  if (groups[0].items.length < 1) groups.shift()

  return groups
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Capitalize and wrap any parenthetical in a <span> so it can be de-emphasized.
export function formatName(string: string): string {
  return (
    string.charAt(0).toUpperCase() +
    string.slice(1).replaceAll('(', '<span>(').replaceAll(')', ')</span>')
  )
}
