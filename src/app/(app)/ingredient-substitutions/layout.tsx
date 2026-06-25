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
      <main className="mx-auto mt-0 max-w-[600px] px-[20px] pb-[75px] pt-[100px] max-[800px]:pt-[16px]">
        <AutoComplete />
        {children}
      </main>
    </>
  )
}
