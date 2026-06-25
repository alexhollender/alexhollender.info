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
    <div className={`timer ${isOn ? '' : 'off'}`}>
      <p className="title">{name ? name : 'untitled timer'}</p>
      <time className="time">{formatTime(duration)}</time>
      <button onClick={() => deleteTimer(id)}>✕</button>
      <audio ref={audioRef}>
        <source src="/media/cooking-timers/alarm.ogg" type="audio/ogg" />
        <source src="/media/cooking-timers/alarm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
