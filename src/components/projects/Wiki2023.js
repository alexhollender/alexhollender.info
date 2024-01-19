import Link from "next/link"
import Image from "next/image"
import comingSoon from '@public/media/projects/wiki-2023/comingsoon.jpg'
import dipComp from '@public/media/projects/wiki-2023/dip-computer.png'
import underConstruction from '@public/media/projects/wiki-2023/underconstruction.gif'
import languages from '@public/media/projects/wiki-2023/318languages.jpg'

export default function Wiki2023() {
  return(
    <>
    <section>
      <p className="projectInfo">
        <span>Role: Staff UX Designer & Design project lead</span>
        <span>Organization: Wikipedia / Wikimedia Foundation</span>
        <span>Date: Spring 2020–January 2022</span>
      </p>

      <p>As a staff product designer at the <Link href="https://wikimediafoundation.org" target="_blank" rel="external">Wikimedia Foundation</Link>, I led the 2023 redesign of the Wikipedia desktop interface. Our team began the project in April, 2020, and launched in January, 2023.</p>

      <p><Link href="/notes/wikipedia-2023-redesign"><strong>Case study</strong></Link></p>
      
      <p>
        Other links:<br />
        <Link href="https://www.smashingmagazine.com/2023/06/behind-curtains-wikipedia-redesign/" target="_blank" rel="external">Smashing Magazine interview</Link><br />
        <Link href="https://slate.com/technology/2023/01/wikipedia-redesign-vector-2022-skin.html" target="_blank" rel="external">Slate article</Link><br />
        <Link href="https://techcrunch.com/2023/01/18/wikipedia-gets-its-first-makeover-in-over-a-decade-and-its-fairly-subtle/" target="_blank" rel="external">Tech Crunch article</Link>
      </p>
    </section>

    <section>
      <Image 
        src={comingSoon}
        alt="Poster for the release of Vector 2022"
        placeholder="blur"
        priority
      />
      <video controls autoPlay loop playsInline muted>
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/vector2022.0525fbcc7acae5c42f64.webm" type="video/webm" />
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/vector2022.a6bddcd494f6af9f2ab8.mp4" type="video/mp4" />
      </video>
      <Image 
        src={dipComp}
        alt="Graphic of computer with in-progress interface"
        placeholder="blur"
        priority
      />
      <Image 
        src={underConstruction}
        alt="Under construction graphic"
      />
      <Image 
        src={languages}
        alt="318+ languages of Wikipedia graphic"
        placeholder="blur"
      />
      <video controls autoPlay loop playsInline muted>
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/content-separation.6ed31e644b55654bc423.webm" type="video/webm" />
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/content-separation.9614dcfb23c3ae351e23.mp4" type="video/mp4" />
      </video>
    </section>
    </>
  )
}