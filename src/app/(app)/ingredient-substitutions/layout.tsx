import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Header from '@/components/ingredientSubstitutions/Header'
import AutoComplete from '@/components/ingredientSubstitutions/AutoComplete'

export const metadata: Metadata = {
  title: 'Ingredient substitutions',
  description: 'Substitutions for common ingredients',
}

export default function IngredientSubstitutionsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-auto mt-0 max-w-xl px-5 pb-20 pt-24 narrow:pt-4">
        <AutoComplete />
        {children}
      </main>
    </>
  )
}
