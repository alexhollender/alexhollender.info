import { importAll, removeDuplicates } from "@/utils/mediaImports"
import Link from "next/link";
import ImageWrapper from "@/components/imageWrapper/ImageWrapper";
const mediaArray = importAll(require.context('@public/media/createbuilddestroy', true, /\.(png|jpe?g|gif|svg)$/));

export default function CreaetBuildDestroy() {
  const media = removeDuplicates(mediaArray)

  return (
    <section>
      <p>In 2006, my cousin Tyler Ben-Amotz started designing graphics and silk-screening them onto shirts. His designs were colorful and often based on rap lyrics. He called the project <em>Create Clothing</em>. Around 2007 I asked if I could help him out. I was interested in the clothing business (partly inspired by another t-shirt company called <em>LOLA</em>) and thought it would be a cool experience to try and sell the t-shirts to stores (i.e. wholesale), and also find a professional screen printer to make the shirts. Over the next few years the graphics and brand evolved, and my friends Jesse and Jordan joined in to help out. I was mainly still responsible for sales and production. Our t-shirts were sold in stores around the US, and eventually some in Europe and Scandinavia too (with the help of a showroom in Milan, and one in Denmark). We made stickers, matchbooks, and hats. We threw a bunch of parties. We had a lot of photoshoots. We had a blog that I posted on religiously. Over time I learned how to use Photoshop and Illustrator, and started making our product catalogs, and various marketing graphics, event fliers, etc. I also learned some HTML and CSS (thanks PJ), and managed our website. Back then I never saw myself as a designer, or even really as a creative person. But working on this project gave me a lot of confidence towards making things. I am forever thankful to Tyler, Jordan, and Jesse for such a fun journey ☺</p>
      <Link href="https://createbuilddestroy.com/" target="_blank" rel="noreferrer">createbuilddestroy.com</Link>
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="Create Build Destroy"
          index={index}
        />
      )}
    </section>
  )
}