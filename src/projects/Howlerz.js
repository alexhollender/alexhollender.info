import videoMp4 from '../media/howlerz/howlerz_website.mp4';
import videoWebm from '../media/howlerz/howlerz_website.webm';
import howlerz1 from '../media/howlerz/howlerz1.jpg';
import howlerz2 from '../media/howlerz/howlerz2.jpg';
import howlerz3 from '../media/howlerz/howlerz3.jpg';
import etherscan from '../media/howlerz/etherscan.png';
import opensea from '../media/howlerz/opensea.png';
import toDoList from '../media/howlerz/to-do-list.png';

const Howlerz = () => {

  return (
    <>
    <p>My friend Noah is an artist, and also works for Christie's as an art dealer. Around 2021 he started getting interested in digital currencies and digital art (i.e. NFTs). In January of 2022 he told me he was going to sell a collection of digital artworks called <i>Howlerz</i>, and asked if I could make him a website where people could buy them. I am always happy to build websites for/with friends, and was intrigued by making a so called "web3" website (which, in the end, is just a normal website + the <a href="https://docs.ethers.io/v5/" target="_blank" rel="noreferrer">ethers library</a>). It was also fun to create a more unique, hand-made looking website. All 5,000 Howlerz sold out in under a minute ; )</p>
    <p className="links">
      <a href="https://howlerz.io" target="_blank" rel="noreferrer">howlerz.io</a>
    </p>
    <video controls width="100%" autoPlay={true} muted={true} loop={true}>
      <source src={videoWebm} type="video/webm" />
      <source src={videoMp4} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <p>Some of the Howlerz artwork <i>(by Noah Davis)</i>:</p>
    <img src={howlerz1} width="1200" loading="lazy" />
    <img src={howlerz2} width="1200" loading="lazy" />
    <img src={howlerz3} width="1200" loading="lazy" />
    <img src={etherscan} width="1200" loading="lazy" />
    <img src={opensea} width="1200" loading="lazy" />
    <img src={toDoList} width="400" loading="lazy" />
    </>
  )
}

export default Howlerz;
