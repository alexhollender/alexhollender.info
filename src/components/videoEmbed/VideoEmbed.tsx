'use client'
import dynamic from "next/dynamic";

export default function VideoEmbed({ url }: { url: string }) {
  const ReactPlayer = dynamic(() =>
    import("react-player/lazy"), { ssr: false }
  );

  return (
    <div className="relative my-[20px] h-0 w-full overflow-hidden rounded-[6px] pt-[62.5%] shadow-media [&>div]:absolute [&>div]:left-1/2 [&>div]:top-1/2 [&>div]:h-full [&>div]:w-full [&>div]:-translate-x-1/2 [&>div]:-translate-y-1/2">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  )
}