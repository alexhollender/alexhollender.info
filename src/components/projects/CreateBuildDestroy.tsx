import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Link from "next/link";
import ImageWrapper from "@/components/imageWrapper/ImageWrapper";
const mediaArray = importAll(require.context('@public/media/projects/createbuilddestroy', true, /\.(png|jpe?g|gif|svg)$/));

export default function CreaetBuildDestroy() {
  const media = removeDuplicates(mediaArray)

  return (
    <>
    <section>
      <p className="projectInfo">
        <span>Role: Co-Founder</span>
        <span>Organization: Create Build Destroy</span>
        <span>Date: Summer 2007–Summer 2011</span>
      </p>

      <p>In 2006, my cousin Tyler Ben-Amotz started making graphics and silk-screening them onto shirts. His designs were loud, and often based on rap lyrics. He called the project <em>Create Clothing</em>. Around 2007 I asked if I could help him out. I was interested in the clothing business (partly inspired by another t-shirt company called <em>LOLA</em>) and thought it would be a cool experience to try and wholesale the shirts to stores. Over the next few years the graphics and brand evolved, and Jesse Zorski and Jordan Boyea joined us. I was mainly responsible for sales and production. Our t-shirts were sold around the US, and eventually in Europe and Scandinavia (with showrooms in Milan, and Denmark). We made stickers, matchbooks, and hats. We threw a bunch of parties. We had a lot of photoshoots. We had a blog that I posted on religiously. Over time I learned how to use Photoshop and Illustrator, and started making our product catalogs, brand graphics, etc. I also learned HTML and CSS (thanks PJ), and managed our website. Back then I didn't see myself as a designer, or even as a "creative" person. But working on this project gave me a lot of confidence towards making things. I am forever thankful to Tyler, Jordan, and Jesse for such a fun journey ☺</p>
      <Link href="https://createbuilddestroy.com/" target="_blank" rel="external">createbuilddestroy.com</Link>
    </section>
    <section>
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="Create Build Destroy"
          index={index}
        />
      )}
    </section>
    </>
  )
}