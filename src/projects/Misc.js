import { importAll } from '../functions.js';

const Misc = () => {
  // import small images
  var images = importAll(require.context('../media/misc', true, /\.(png|jpe?g|svg|gif)$/));

  return (
    <>
    <p>Other bits and pieces</p>
    {images.map((element, index) => (
      <img key={index} src={element} loading="lazy" />
    ))}
    </>
  )
}

export default Misc;
