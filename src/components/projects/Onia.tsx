import { importAll, removeDuplicates } from "@/utils/mediaImports"
import ImageWrapper from "@/components/imageWrapper/ImageWrapper";
import ProjectLink from "./ProjectLink";
import ProjectInfo from "./ProjectInfo";
import StickyColumn from "./StickyColumn";
const mediaArray = importAll(require.context('@public/media/projects/onia', true, /\.(png|jpe?g|gif|svg)$/));

export default function Onia() {
  const media = removeDuplicates(mediaArray)

  return (
    <>
    <StickyColumn>
      <ProjectInfo items={[
        'Role: Creative Director',
        'Organization: Onia',
        'Date: Summer 2011–Summer 2013',
      ]} />

      <p className="mb-5">In 2010 a friend of my sister's, Carl, started a small, high-end, men's swimsuit company in NYC called <em>Onia</em>. After graduating from college in the spring of 2011 I started helping Carl out, mostly with website and marketing/communications design stuff. We enjoyed working together so a few months later I started working for Carl full time. Over the next two years I helped shape the brand. I designed swimsuits and other products, art directed photoshoots & popup shops, desiged packaging & collateral, created mood boards, marketing materials, designed and redesigned the website, and more. I was the only designer working on Onia at the time. The brand is still around and is doing well.</p>
      <ProjectLink href="https://onia.com" target="_blank" rel="external">onia.com</ProjectLink>
    </StickyColumn>
    <section>
      {media.map((item, index) =>
        <ImageWrapper
          key={item.src}
          item={item}
          project="Onia"
          index={index}
        />
      )}
    </section>
    </>
  )
}
