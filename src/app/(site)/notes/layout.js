import s from './notes.module.scss'

export default function NotesLayout({ children }) {
  return (
    <main className={s.notes}>{children}</main>
  )
}