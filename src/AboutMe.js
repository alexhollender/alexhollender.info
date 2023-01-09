import aboutMe from './media/aboutme.png';
import './scss/AboutMe.scss';

const AboutMe = () => {

  return (
    <div id="about-me-page">
      <div id="about-me-content">
      {/*
        <p>for my next act, I will interview myself...</p>
        <p>what is most fun? surfing, skateboarding, listening to rap music</p>
        <p>what do you care about? learning, people i love, communication, feelings</p>
        <p>are you healthy? i try to be...i focus on sleep, exercise, and cooking healthy food. if i'm doing those things regularly, the rest seems to take care of itself.</p>
        <p></p>
      */}
        <img src={aboutMe} width="100%" />
      </div>
    </div>
  )
}

export default AboutMe;
