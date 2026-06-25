import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 px-16 py-3 narrow:px-5">
      <div className="flex items-center justify-between">
        <Link href="/ingredient-substitutions" className="no-underline">
          <h1 className="font-serif text-3xl text-neutral-600 narrow:w-32 narrow:text-xl">
            Ingredient substitutions
          </h1>
        </Link>
        <h2 className="font-sans text-lg text-neutral-600 narrow:w-16 narrow:text-right narrow:text-xs">
          substitutions for common ingredients
        </h2>
      </div>
    </header>
  )
}
