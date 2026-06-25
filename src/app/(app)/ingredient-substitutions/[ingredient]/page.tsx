import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ingredients } from '@/components/ingredientSubstitutions/data'
import { getIngredientById } from '@/components/ingredientSubstitutions/search'
import { categorizeSubstitutes } from '@/components/ingredientSubstitutions/categorize'
import Substitutes from '@/components/ingredientSubstitutions/Substitutes'

interface PageProps {
  params: { ingredient: string }
}

export function generateStaticParams() {
  return ingredients.map((i) => ({ ingredient: i.id }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const ingredient = getIngredientById(params.ingredient)
  const name = ingredient?.ingredientName ?? 'Ingredient'
  return {
    title: `${name} substitutes • Ingredient substitutions`,
    description: `Substitutes for ${name.toLowerCase()}`,
  }
}

export default function Page({ params }: PageProps) {
  const ingredient = getIngredientById(params.ingredient)
  if (!ingredient) notFound()
  const groups = categorizeSubstitutes(ingredient.substitutes)
  return <Substitutes groups={groups} />
}
