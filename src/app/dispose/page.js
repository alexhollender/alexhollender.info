import Link from "next/link"
import Image from "next/image"
import comingSoon from '../../../public/media/wiki-2023/comingsoon.jpg'

export default function Dispose() {
  return(
    <>
      <section>
        <p>As a staff member of the <Link href="https://wikimediafoundation.org" target="_blank" rel="noreferrer">Wikimedia Foundation</Link>, I led the 2023 redesign of the Wikipedia desktop interface. Our team began the project in April, 2020, and launched in January, 2023.</p>
        <ul><li><Link href="/wikipedia-2023-redesign">My notes on the project &amp; process</Link></li><li><Link href="https://www.smashingmagazine.com/2023/06/behind-curtains-wikipedia-redesign/" target="_blank" rel="noreferrer">Smashing Magazine interview</Link></li><li><Link href="https://slate.com/technology/2023/01/wikipedia-redesign-vector-2022-skin.html" target="_blank" rel="noreferrer">Slate article</Link></li><li><Link href="https://techcrunch.com/2023/01/18/wikipedia-gets-its-first-makeover-in-over-a-decade-and-its-fairly-subtle/" target="_blank" rel="noreferrer">Tech Crunch article</Link></li></ul>
      </section>
      <section>
        <Image 
          src={comingSoon}
          alt="Poster for the release of Vector 2022"
          placeholder="blur"
        />
      </section>
    </>
  )
}