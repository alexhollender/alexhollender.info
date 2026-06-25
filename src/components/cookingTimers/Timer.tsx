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
      className={`relative min-h-52 w-1/3 border-b border-r border-neutral-300 tablet:min-h-0 tablet:w-auto tablet:border-r-0 tablet:px-5 ${
        isOn ? '' : 'bg-black text-white'
      }`}
    >
      <p className="my-4 px-5 font-serif text-4xl tablet:my-5 tablet:px-0">
        {name ? name : 'untitled timer'}
      </p>
      <time className="px-5 font-sans text-5xl tablet:my-5 tablet:px-0 tablet:text-4xl">
        {formatTime(duration)}
      </time>
      <button
        onClick={() => deleteTimer(id)}
        className={`absolute right-9 top-9 cursor-pointer border-0 bg-transparent text-3xl tablet:right-5 tablet:top-5 ${
          isOn ? '' : 'text-white'
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
