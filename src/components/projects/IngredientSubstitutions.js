import Link from "next/link"
import Image from "next/image"
import gif from "@public/media/ingredient-substitutions/ingredientSubstitutions.gif"

export default function IngredientSubstitutions() {
  return (
    <section>
      <p>I do a lot of cooking, and often need to look up substitutions for ingredients. I created a database of common ingredient subsitutions, and then built a front-end (using React) to make it easy to look things up. In some cases the substitutes are categorized (e.g. general, baking, coloring, etc.). Soon I will add the ability for other people to recommend additional substitutes, and up/down vote on substitutes. I also need to add an express.js server so that I can serve dynamic metadata, which will help with SEO.</p>
      <Link href="https://ingredientsubstitutions.net/" target="_blank" rel="noreferrer">ingredientsubstitutions.net</Link>
      <Image 
        src={gif}
        alt="GIF of ingredientsubstitutions.net being used"
        priority
        className="shadow"
      />
    </section>
  )
}