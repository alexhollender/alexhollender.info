import demoGif from '../media/ingredientsubstitutions/demo.gif';

const IngredientSubstitutions = () => {

  return (
    <>
    <p>I do a lot of cooking, and often need to look up substitutions for ingredients. I created a database of common ingredient subsitutions, and then built a front-end (using React) to make it easy to look things up. In some cases the substitutes are categorized (e.g. general, baking, coloring, etc.). Soon I will add the ability for other people to recommend additional substitutes, and up/down vote on substitutes. I also need to add an express.js server so that I can serve dynamic metadata, which will help with SEO.</p>
    <p><a href="https://ingredientsubstitutions.net/" target="_blank" rel="noreferrer">ingredientsubstitutions.net</a></p>
    <img className="border" src={demoGif} width="1228" />
    </>
  )
}

export default IngredientSubstitutions;
