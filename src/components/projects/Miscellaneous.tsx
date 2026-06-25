import { importAll, removeDuplicates } from "@/utils/mediaImports"
import ImageWrapper from "@/components/imageWrapper/ImageWrapper"
const mediaArray = importAll(require.context('@public/media/projects/miscellaneous', true, /\.(png|jpe?g|gif|svg)$/))

export default function Miscellaneous() {
  const media = removeDuplicates(mediaArray)

  return (
    <>
    <section>
      <p>Other bits and pieces</p>
    </section>
    <section className="fillGrid">
      {media.map((item, index) =>
        <ImageWrapper 
          key={item.src}
          item={item}
          project="Miscellaneous work"
          index={index}
        />
      )}
      <video controls autoPlay loop playsInline muted>
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/raicilla-website.9412efa95217a72c619a.webm" type="video/webm" />
        <source src="https://alexhollender-97463.firebaseapp.com/static/media/raicilla-website.df1747e88a6351ed0e84.mp4" type="video/mp4" />
      </video>
    </section>
    </>
  )
}