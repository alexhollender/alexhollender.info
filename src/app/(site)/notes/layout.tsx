import type { ReactNode } from 'react'

const notesClass = [
  'max-w-5xl',
  // headings
  '[&_h1]:font-tobias [&_h2]:font-tobias [&_h3]:font-tobias',
  '[&_h1]:font-normal [&_h2]:font-normal [&_h3]:font-bold',
  '[&_h1]:text-display [&_h1]:leading-tight [&_h1]:mb-5',
  '[&_h2]:text-title [&_h2]:leading-relaxed [&_h2]:mt-11 [&_h2]:mb-3.5',
  '[&_h3]:text-2xl [&_h3]:leading-relaxed [&_h3]:mt-8 [&_h3]:mb-4',
  // text
  '[&_p]:leading-normal [&_ul]:leading-normal [&_a]:leading-normal',
  '[&_p+p]:mt-6',
  '[&_ul]:[margin:revert]',
  '[&_a]:text-blue-600',
  '[&_.credits]:text-gray-text',
  // media
  '[&_img]:my-8 [&_video]:my-8',
  // table of prototypes
  '[&_details]:my-5 [&_summary]:my-5 [&_summary]:cursor-pointer',
  '[&_.gridContainer]:max-w-xl [&_.gridContainer]:grid [&_.gridContainer]:grid-cols-[1fr_50px_1fr] [&_.gridContainer]:gap-0 [&_.gridContainer]:border [&_.gridContainer]:border-black [&_.gridContainer]:border-b-0 [&_.gridContainer]:text-fine',
  '[&_.gridItem]:m-0 [&_.gridItem]:border-b [&_.gridItem]:border-r [&_.gridItem]:border-black [&_.gridItem]:px-2 [&_.gridItem]:py-1',
  '[&_.gridItem:nth-child(3n)]:border-r-0',
].join(' ')

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <main className={notesClass}>{children}</main>
  )
}
