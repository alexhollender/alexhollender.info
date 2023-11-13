import s from './notes.module.scss'

export default function NotesLayout({ children }) {
  return (
    <section className={s.notes}>{children}</section>
  )
}