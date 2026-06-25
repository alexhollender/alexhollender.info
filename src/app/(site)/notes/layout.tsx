import s from './notes.module.scss'
import type { ReactNode } from 'react'

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <main className={s.notes}>{children}</main>
  )
}