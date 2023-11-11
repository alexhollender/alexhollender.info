import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Link from "next/link"
import ImageWrapper from "@/components/imageWrapper/ImageWrapper"
const mediaArray = importAll(require.context('@public/media/projects/howlerz', true, /\.(png|jpe?g|gif|svg)$/))

export default function Howlerz() {
  const media = removeDuplicates(mediaArray)

  return (
    <section>
      <p>My friend Noah is an artist, and also works for Christie's as an art dealer. Around 2021 he started getting interested in digital currencies and digital art (i.e. NFTs). In January of 2022 he told me he was going to sell a collection of digital artworks called <i>Howlerz</i>, and asked if I could make him a website where people could buy them. I am always happy to build websites for/with friends, and was intrigued by making a so called "web3" website (which, it turns out, is just website that connects to a crypto wallet). It fun to create a more unique, hand-made looking website. It was also my first time building a website that people bought things on. All 5,000 Howlerz sold out in under a minute.</p>
      <Link href="https://howlerz.io" target="_blank" rel="noreferrer">howlerz.io</Link>
      <video controls autoPlay loop playsInline muted>
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/howlerz_website.4b8f10bfee6cc15b983f.webm" type="video/webm" />
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/howlerz_website.4d3f36c456a90ae61240.mp4" type="video/mp4" />
      </video>
      <p>Some of the Howlerz artwork <em>(by Noah Davis)</em>:</p>
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="Howlerz"
          index={index}
        />
      )}
    </section>
  )
}