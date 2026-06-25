import type { ReactNode } from 'react'

const notesClass = [
  'max-w-[1000px]',
  // headings
  '[&_h1]:font-tobias [&_h2]:font-tobias [&_h3]:font-tobias',
  '[&_h1]:font-normal [&_h2]:font-normal [&_h3]:font-bold',
  '[&_h1]:text-[38px] [&_h1]:leading-[125%] [&_h1]:mb-[20px]',
  '[&_h2]:text-[32px] [&_h2]:leading-[1.8] [&_h2]:mt-[44px] [&_h2]:mb-[14px]',
  '[&_h3]:text-[24px] [&_h3]:leading-[1.8] [&_h3]:mt-[30px] [&_h3]:mb-[16px]',
  // text
  '[&_p]:leading-[150%] [&_ul]:leading-[150%] [&_a]:leading-[150%]',
  '[&_p+p]:mt-[25px]',
  '[&_ul]:[margin:revert]',
  '[&_a]:text-[blue]',
  '[&_.credits]:text-gray-text',
  // media
  '[&_img]:my-[30px] [&_video]:my-[30px]',
  // table of prototypes
  '[&_details]:my-[20px] [&_summary]:my-[20px] [&_summary]:cursor-pointer',
  '[&_.gridContainer]:max-w-[600px] [&_.gridContainer]:grid [&_.gridContainer]:grid-cols-[1fr_50px_1fr] [&_.gridContainer]:gap-0 [&_.gridContainer]:border [&_.gridContainer]:border-[black] [&_.gridContainer]:border-b-0 [&_.gridContainer]:text-[15px]',
  '[&_.gridItem]:m-0 [&_.gridItem]:border-b [&_.gridItem]:border-r [&_.gridItem]:border-[black] [&_.gridItem]:px-[8px] [&_.gridItem]:py-[4px]',
  '[&_.gridItem:nth-child(3n)]:border-r-0',
].join(' ')

export default function NotesLayout({ children }: { children: ReactNode }) {
  return (
    <main className={notesClass}>{children}</main>
  )
}
