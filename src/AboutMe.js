import aboutMe from './media/aboutme.png';
import './scss/AboutMe.scss';

const AboutMe = () => {

  return (
    <div id="about-me-page">
      <div id="about-me-content">
        <img src={aboutMe} width="100%" />
        <p>wanna talk about something, or hang out? i'm probably down<br></br>alexhollender@gmail.com</p>
      </div>
    </div>
  )
}

export default AboutMe;
