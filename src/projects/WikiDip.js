import vectorComingSoon from '../media/wikidip/vector2022.png';
import vector2022_mp4 from '../media/wikidip/vector2022.mp4';
import vector2022_webM from '../media/wikidip/vector2022.webm';
import vector2022_gif from '../media/wikidip/vector2022.gif';
import dipGif from '../media/wikidip/dip.gif';
import dipComputer from '../media/wikidip/dip-computer.png';
import languagesGraphic from '../media/wikidip/318languages.jpg';

const WikiDip = () => {

  return (
    <>
    <p>In 2018 I joined the <a href="https://wikimediafoundation.org" target="_blank" rel="noreferrer">Wikimedia Foundation</a> as a designer working on the reading experience of <a href="https://en.wikipedia.org/wiki/Blues" target="_blank" rel="noreferrer">Wikipedia</a>. The first two projects I worked on were improvements to the mobile website. Then in 2019, Nirzar, who was the director of design, convinced the Foundation that we needed to significantly update the desktop website — which hadn't been done since 2010 — and the project got assigned to our team.</p>
    <p>Since then our team has been building the new interface, one component at a time, and continously updating some smaller Wikipedias (e.g. Hebrew Wikipedia, Korean Wikipedia, Serbian Wikipedia). We're hoping to release the finished interface on English Wikipedia in July of 2022. I will share a case study afterwards ☺</p>
    <p><a href="https://diff.wikimedia.org/2021/08/12/the-story-behind-wikipedias-upcoming-new-look/" target="_blank" rel="noreferrer">Link to blog post I wrote</a></p>
    <img src={vectorComingSoon} width="1200" />
    <video controls width="100%" autoPlay={true} muted={true} loop={true}>
      <source src={vector2022_webM} type="video/webm" />
      <source src={vector2022_mp4} type="video/mp4" />
      <img src={vector2022_gif} />
    </video>
    <img src={dipComputer} width="1200" />
    <img src={dipGif} width="1200" />
    <img src={languagesGraphic} width="1200" />
    </>
  )
}

export default WikiDip;
