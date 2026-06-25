import Gallery from '@/components/gallery/Gallery'
import Image from 'next/image'
import aboutMe from '@public/media/about/aboutme.png'

export default function About() {
  return (
    <section className="[&_img]:max-w-md">
      <Gallery />
      {/* <Image 
        src={aboutMe}
        alt='Meme of a goat staring in a mirror with the text "why am I like this"'
        priority
      /> */}
      <p>Wanna talk about something, or hang out? I'm probably down</p>
      <p>alexhollender@gmail.com</p>
    </section>
  )
}