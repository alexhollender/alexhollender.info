import heroLarge from '../media/dispose/dispose_01.jpg';
import heroSmall from '../media/dispose/dispose_01-small.jpg';
import videoMp4 from '../media/dispose/dispose_website.mp4';
import videoWebm from '../media/dispose/dispose_website.webm';
import { importAll } from '../functions.js';

const Dispose = () => {
  // import large images
  var imagesLarge = importAll(require.context('../media/dispose/large', true, /\.(png|jpe?g|svg)$/));
  // import small images
  var imagesSmall = importAll(require.context('../media/dispose/small', true, /\.(png|jpe?g|svg)$/));
  // create array of objects, {largeImage: smallImage}
  var imagesArr = [];
  {imagesLarge.map((element, index) => (
   imagesArr.push({[element]: imagesSmall[index]})
  ))}

  return (
    <>
    <p>DISPOSE was a photography project & online magazine. In 2012, my friends Bruno and Arpana came up with the idea of sending disposable cameras to interesting people around the world, and asking them to document 24 hours of their lives. The three of us joined together and figured it out as we went along. I was mainly responsible for building and maintaining the website, and for branding stuff, though everyone kind of did a bit of everything. Over two years we published photo stories from people in 32 countries. It was an energetic, hectic, and fun endevor. I believe something special is captured in these photos. Some of my favorites are below.</p>
    <picture>
      <source media="(min-width:1580px)" srcSet={heroLarge} width="2000" />
      <img src={heroSmall} width="1000" />
    </picture>
    <video controls width="100%" autoPlay={true} muted={true} loop={true}>
      <source src={videoWebm} type="video/webm" />
      <source src={videoMp4} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    {imagesArr.map((element, index) => (
      <picture key={index}>
        <source media="(min-width:1580px)" srcSet={Object.keys(element)} width="2000" />
        <img src={Object.values(element)} width="1000" loading="lazy" key={index} />
      </picture>
    ))}
    </>
  )
}

export default Dispose;
