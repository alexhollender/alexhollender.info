import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between font-vcr text-[14px] leading-[normal]">
      <Link href="/" className="no-underline">
        <h1>Alex Hollender — Product Design</h1>
      </Link>
    </header>
  )
}
