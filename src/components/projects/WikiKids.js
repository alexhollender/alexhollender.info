import Link from "next/link"
import VideoEmbed from "@/components/videoEmbed/VideoEmbed"
import s from './wikiKids.module.scss'

export default function WikiKids() {

  return(
    <>
    <section>
      <p className="projectInfo">
        <span>Role: Staff UX Designer</span>
        <span>Organization: Wikipedia / Wikimedia Foundation</span>
        <span>Date: Fall 2021</span>
      </p>
      
      <p><Link href="en.wikipedia.org" target="_blank" rel="external">Wikipedia</Link> is a free encylopedia created by volunteers around the world. While it aims to provide <i>everyone</i> with all of the world's knowlege, it is often text-heavy, and written at a high school/college reading level. So what about younger learners, and/or visual learners? During some down time while I was working at the <Link href="wikipediafoundation.org" target="_blank" rel="external">Wikimedia Foundation</Link> I sketched out & prototyped some ideas for how we might better support those learners.</p>
    </section>
    <section>
      <VideoEmbed url="https://www.youtube.com/watch?v=WvWXke-SeOQ" />
      <div className={s.flex}>
        <div>
          <p><Link href="https://mobile-wikipedia.web.app/Hokusai" target="_blank" rel="external">first prototype</Link> <span>(intended for mobile)</span></p>
          <video controls loop playsInline muted>
            <source src="https://alexhollender-97463.firebaseapp.com/static/media/mediaslider.73d46202499e5e0d38c1.webm" type="video/webm" />
            <source src="https://alexhollender-97463.firebaseapp.com/static/media/mediaslider.d16329cd661d264e7e94.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p><Link href="https://mobile-stories-96b31.web.app/Machu_Picchu" target="_blank" rel="external">second prototype</Link> <span>(intended for mobile)</span></p>
          <video controls loop playsInline muted>
            <source src="https://alexhollender-97463.firebaseapp.com/static/media/mediastory.363521841398c8e27c9a.webm" type="video/webm" />
            <source src="https://alexhollender-97463.firebaseapp.com/static/media/mediastory.eec9ce1396b0d15832ec.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    </>
  )
}