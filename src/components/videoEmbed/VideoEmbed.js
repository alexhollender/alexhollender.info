'use client'
import dynamic from "next/dynamic";
import s from './videoEmbed.module.scss'

export default function VideoEmbed({ url }) {
  const ReactPlayer = dynamic(() => 
    import("react-player/lazy"), { ssr: false }
  );
  
  return (
    <div className={`${s.aspectRatioBox} shadow`}>
      <ReactPlayer 
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  )
}