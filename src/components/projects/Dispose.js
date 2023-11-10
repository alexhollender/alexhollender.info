import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Image from "next/image"
import ImageWrapper from "@/components/imageWrapper/ImageWrapper"
const mediaArray = importAll(require.context('@public/media/dispose/images', true, /\.(png|jpe?g|gif|svg)$/))
import camera from '@public/media/dispose/dispose_01.jpg'

export default function Dispose() {
  const media = removeDuplicates(mediaArray)

  return (
    <section>
      <p>DISPOSE was a photography project & online magazine. In 2012, my friends Bruno and Arpana came up with the idea of sending disposable cameras to interesting people around the world, and asking them to document 24 hours of their lives. The three of us joined together and figured it out as we went along. I was mainly responsible for building and maintaining the website, and for branding stuff, though everyone kind of did a bit of everything. Over two years we published photo stories from people in 32 countries. It was an energetic, hectic, and fun endevor. I believe something special is captured in these photos. Some of my favorites are below.</p>
      <Image
        src={camera}
        alt="Disposable camera"
        placeholder="blur" 
        priority
      />
      <video controls autoPlay loop playsInline muted>
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/dispose_website.a3fc7d1ad12f57857284.webm" type="video/webm" />
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/dispose_website.ecdb9ad01e6fbfdaf611.mp4" type="video/mp4" />
      </video>
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="DISPOSE"
          index={index}
        />
      )}
    </section>
  )
}