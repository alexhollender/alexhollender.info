import { Link } from "react-router-dom";
import wikipediaRedesign from '../media/wikidip/wikipediaRedesign.jpg';
import vector2022_mp4 from '../media/wikidip/vector2022.mp4';
import vector2022_webM from '../media/wikidip/vector2022.webm';
import vector2022_gif from '../media/wikidip/vector2022.gif';
import dipGif from '../media/wikidip/dip.gif';
import dipComputer from '../media/wikidip/dip-computer.png';
import languagesGraphic from '../media/wikidip/318languages.jpg';
import contentSeparationMp4 from '../media/wiki2023/content-separation.mp4';
import contentSeparationWebM from '../media/wiki2023/content-separation.webm';

const Wiki2023 = () => {

  return (
    <>
    <p>As a staff member of the <a href="https://wikimediafoundation.org" target="_blank" rel="noreferrer">Wikimedia Foundation</a>, I led the 2023 redesign of the Wikipedia desktop interface. Our team began the project in April, 2020, and launched in January, 2023.</p>

    <p>
      <ul>
        <li><Link to="/wikipedia-2023-redesign">My notes on the project & process</Link></li>
        <li><a href="https://slate.com/technology/2023/01/wikipedia-redesign-vector-2022-skin.html" target="_blank">Slate article</a></li>
        <li><a href="https://techcrunch.com/2023/01/18/wikipedia-gets-its-first-makeover-in-over-a-decade-and-its-fairly-subtle/" target="_blank">Tech Crunch article</a></li>
      </ul>
    </p>
    
    <img src={wikipediaRedesign} width="1200" />
    <video controls width="100%" autoPlay muted loop playsInline>
      <source src={vector2022_webM} type="video/webm" />
      <source src={vector2022_mp4} type="video/mp4" />
      <img src={vector2022_gif} />
    </video>
    <img src={dipComputer} width="1200" />
    <img src={dipGif} width="1200" />
    <img src={languagesGraphic} width="1200" />
    <video controls width="100%" autoPlay muted loop playsInline>
      <source src={contentSeparationWebM} type="video/webm" />
      <source src={contentSeparationMp4} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    </>
  )
}

export default Wiki2023;
