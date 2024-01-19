'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import getPageType from '@/utils/getPageType'
import Link from 'next/link'
import s from './header.module.scss'

export default function Header() {
  const segment = useSelectedLayoutSegment()
  const pageType = getPageType(segment)

  return(
    <header className={`${s.header} ${s[pageType]}`}>
      <Link href="/" className={s.left}>
        <h1>Alex Hollender — Product Design</h1>
        <span>← Home</span>
      </Link>
    </header>
  )
}