'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import getPageType from '@/utils/getPageType'
import s from './content.module.scss'

export default function Content({ children }) {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  const pageType = getPageType(segment)

  return (
    <main className={`${s.content} ${s[pageType]}`}>
      {children}
    </main>
  )
}