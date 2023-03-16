import overviewWebm from '../media/wikikids/wikikids.webm';
import overviewMp4 from '../media/wikikids/wikikids.mp4';
import mediaSliderWebm from '../media/wikikids/mediaslider.webm';
import mediaSliderMp4 from '../media/wikikids/mediaslider.mp4';
import mediaStoryWebm from '../media/wikikids/mediastory.webm';
import mediaStoryMp4 from '../media/wikikids/mediastory.mp4';

const WikipediaForKids = () => {

  return (
    <>
    <p><a href="en.wikipedia.org" target="_blank" rel="noreferrer">Wikipedia</a> is a free encylopedia created by volunteers around the world. While it aims to provide <i>everyone</i> with all of the world's knowlege, it is often text-heavy, and written at a high school/college reading level. So what about younger learners, and/or visual learners? During some down time while I was working at the <a href="wikipediafoundation.org" target="_blank" rel="noreferrer">Wikimedia Foundation</a> I sketched out & prototyped some ideas for how we might better support those learners.</p>
    <video id="intro" controls width="100%">
      <source src={overviewWebm} type="video/webm" />
      <source src={overviewMp4} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    <div className="flex">
      <div className="left">
        <p><a href="https://mobile-wikipedia.web.app/Hokusai" target="_blank" rel="noreferrer">first prototype</a> <span>(best viewed on a phone)</span></p>
        <video controls width="372px">
          <source src={mediaSliderWebm} type="video/webm" />
          <source src={mediaSliderMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div className="right">
        <p><a href="https://mobile-stories-96b31.web.app/Machu_Picchu" target="_blank" rel="noreferrer">second prototype</a> <span>(best viewed on a phone)</span></p>
        <video controls width="372px">
          <source src={mediaStoryWebm} type="video/webm" />
          <source src={mediaStoryMp4} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
    </>
  )
}

export default WikipediaForKids;
