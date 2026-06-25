'use client'
import { useEffect, useRef } from 'react'
import type { TimerData } from './types'

function formatTime(duration: number): string {
  const time = new Date(duration * 1000).toISOString()
  if (duration < 60) return time.substring(15, 19) // SS
  if (duration < 3600) return time.substring(14, 19) // MM:SS
  return time.substring(11, 19) // HH:MM:SS
}

interface TimerProps extends TimerData {
  deleteTimer: (id: string) => void
}

export default function Timer({
  id,
  name,
  duration,
  isOn,
  deleteTimer,
}: TimerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  // play the alarm when the timer ends (isOn flips to false)
  useEffect(() => {
    if (!isOn) audioRef.current?.play()
  }, [isOn])

  return (
    <div
      className={`relative min-h-[200px] w-[33%] border-b border-r border-[#cacaca] max-[900px]:min-h-0 max-[900px]:w-auto max-[900px]:border-r-0 max-[900px]:px-[20px] ${
        isOn ? '' : 'bg-[#000] text-[#fff]'
      }`}
    >
      <p className="my-[1em] px-[20px] font-['Times_New_Roman'] text-[34px] max-[900px]:my-[20px] max-[900px]:px-0">
        {name ? name : 'untitled timer'}
      </p>
      <time className="px-[20px] font-sans text-[44px] max-[900px]:my-[20px] max-[900px]:px-0 max-[900px]:text-[36px]">
        {formatTime(duration)}
      </time>
      <button
        onClick={() => deleteTimer(id)}
        className={`absolute right-[35px] top-[35px] cursor-pointer border-0 bg-transparent text-[30px] max-[900px]:right-[20px] max-[900px]:top-[20px] ${
          isOn ? '' : 'text-[#fff]'
        }`}
      >
        ✕
      </button>
      <audio ref={audioRef}>
        <source src="/media/cooking-timers/alarm.ogg" type="audio/ogg" />
        <source src="/media/cooking-timers/alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
