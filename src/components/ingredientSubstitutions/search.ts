import Fuse from 'fuse.js'
import { ingredients } from './data'
import type { Ingredient } from './types'

// Local fuzzy search over ingredient names — replaces the original Algolia index.
const fuse = new Fuse(ingredients, {
  keys: ['ingredientName'],
  threshold: 0.4,
  ignoreLocation: true,
  minMatchCharLength: 1,
})

export function searchIngredients(query: string, limit = 4): Ingredient[] {
  const trimmed = query.trim()
  if (!trimmed) return []
  return fuse.search(trimmed, { limit }).map((r) => r.item)
}

export function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.find((i) => i.id === id)
}
