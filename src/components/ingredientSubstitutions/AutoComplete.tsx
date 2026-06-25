'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { searchIngredients, getIngredientById } from './search'
import { fontIngredient } from './styles'
import type { Ingredient } from './types'

const BASE = '/ingredient-substitutions'

function slugFromPath(pathname: string): string | null {
  const rest = pathname.replace(BASE, '').replace(/^\//, '')
  return rest || null
}

export default function AutoComplete() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = slugFromPath(pathname)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Ingredient[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // sync the field with the ingredient in the URL
  useEffect(() => {
    const current = slug ? getIngredientById(slug) : undefined
    setQuery(current ? current.ingredientName : '')
    setResults([])
    setIsOpen(false)
  }, [slug])

  // autofocus on the home screen (desktop only), matching the original
  useEffect(() => {
    if (slug) return
    if (window.matchMedia('(max-width: 600px)').matches) return
    inputRef.current?.focus()
  }, [slug])

  // close the panel on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const handleChange = (value: string) => {
    setQuery(value)
    const hits = searchIngredients(value)
    setResults(hits)
    setIsOpen(hits.length > 0)
    setActiveIndex(-1)
  }

  const select = useCallback(
    (ingredient: Ingredient) => {
      setIsOpen(false)
      inputRef.current?.blur()
      router.push(`${BASE}/${ingredient.id}`)
    },
    [router]
  )

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      select(results[activeIndex >= 0 ? activeIndex : 0])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  const showPanel = isOpen && results.length > 0

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-col">
        <div className="relative">
          {/* search icon */}
          <svg
            className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 max-[550px]:left-[12px] max-[550px]:h-4 max-[550px]:w-4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="#595959"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="5.5" />
            <line x1="11.5" y1="11.5" x2="16.5" y2="16.5" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            placeholder="Search for an ingredient"
            aria-label="Search for an ingredient"
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (results.length > 0) setIsOpen(true)
              window.scrollTo({ top: 50, left: 0, behavior: 'smooth' })
            }}
            className={`h-[50px] w-full rounded-[10px] border border-[#969696] bg-white pl-[46px] outline-none hover:border-black focus-visible:border-[blue] focus-visible:shadow-[inset_0_0_0_1px_blue] max-[550px]:pl-[38px] ${fontIngredient} ${
              showPanel ? 'rounded-b-none' : ''
            }`}
          />
        </div>
      </div>

      {showPanel && (
        <div className="absolute z-10 w-[calc(100%-2px)] rounded-b-[10px] border border-t-0 border-[#ccc] bg-white shadow-[0_2px_2px_rgb(0_0_0_/_10%)]">
          <ul>
            {results.map((item, i) => (
              <li
                key={item.id}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseDown={(e) => {
                  e.preventDefault()
                  select(item)
                }}
                className={`cursor-pointer px-[46px] py-[10px] max-[550px]:px-[36px] ${fontIngredient} ${
                  activeIndex === i ? 'bg-[#ededed]' : ''
                }`}
              >
                {item.ingredientName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
