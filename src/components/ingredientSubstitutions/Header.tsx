import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-[#eee] px-[60px] py-[12px] max-[800px]:px-[20px]">
      <div className="flex items-center justify-between">
        <Link href="/ingredient-substitutions" className="no-underline">
          <h1 className="font-serif text-[28px] text-[#595959] max-[800px]:w-[120px] max-[800px]:text-[20px]">
            Ingredient substitutions
          </h1>
        </Link>
        <h2 className="font-sans text-[18px] text-[#595959] max-[800px]:w-[70px] max-[800px]:text-right max-[800px]:text-[11px]">
          substitutions for common ingredients
        </h2>
      </div>
    </header>
  )
}
