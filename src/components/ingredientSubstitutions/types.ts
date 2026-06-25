export interface Substitute {
  substituteName: string
  score?: number
  category?: string
  proportion?: string
  note?: string
  index?: number
}

export interface Ingredient {
  id: string
  ingredientName: string
  substitutes: Substitute[]
}

export interface SubstituteCategoryGroup {
  category: string
  items: Substitute[]
}
