import { importAll } from '../functions.js';

const Onia = () => {
  // import large images
  var imagesLarge = importAll(require.context('../media/onia/large', true, /\.(png|jpe?g|svg)$/));
  // import small images
  var imagesSmall = importAll(require.context('../media/onia/small', true, /\.(png|jpe?g|svg)$/));
  // create array of objects, {largeImage: smallImage}
  var imagesArr = [];
  {imagesLarge.map((element, index) => (
   imagesArr.push({[element]: imagesSmall[index]})
  ))}

  return (
    <>
    <p>In 2010 a friend of my sister's, Carl, started a small, high-end, men's swimsuit company in NYC called <i>Onia</i>. After graduating from college in the spring of 2011 I started helping Carl out, mostly with website and marketing/communications design stuff. We enjoyed working together so a few months later I started working for Carl full time. Over the next two years I helped shape the brand. I designed swimsuits and other products, art directed photoshoots & popup shops, desiged packaging & collateral, created mood boards, marketing materials, designed and redesigned the website, and more. I was the only designer working on Onia at the time. The brand is still around and is doing well.</p>
    <p><a href="http://onia.com" target="_blank" rel="noreferrer">onia.com</a></p>
    {imagesArr.map((element, index) => (
      <picture key={index}>
        <source media="(min-width:1580px)" srcSet={Object.keys(element)} width="2000" />
        <img src={Object.values(element)} width="1000" loading="lazy" key={index} />
      </picture>
    ))}
    </>
  )
}

export default Onia;
