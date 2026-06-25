import Gallery from '@/components/gallery/Gallery'
import Home from '@/components/home/Home'
import Nav from '@/components/nav/Nav'

export default function Page() {
  return (
    <main>
      <Home />
      <Nav />
      <Gallery />
      <p className="font-xanh-mono text-[14px]">© 2024 • you win some, you loose some</p>
    </main>
  )
}
