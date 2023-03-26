import overviewGif from '../media/cookingtimers/cookingtimers.gif';

const CookingTimers = () => {

  return (
    <>
    <p>Around 2018 I inched my way from designing and front-end web development, to building web apps. I took a general JavaScript class, then took a React.js class. This is a simple app I designed and built using React. You can set & delete timers, and you can also name them.</p>
    <p><a href="http://cookingtimers.net" target="_blank" rel="noreferrer">cookingtimers.net</a></p>
    <img className="border" src={overviewGif} width="1228" />
    </>
  )
}

export default CookingTimers;
