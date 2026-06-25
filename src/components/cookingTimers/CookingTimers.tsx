'use client'
import { useState, useEffect } from 'react'
import Header from './Header'
import NewTimer from './NewTimer'
import Timer from './Timer'
import type { TimerData } from './types'

export default function CookingTimers() {
  const [timers, setTimers] = useState<TimerData[]>([])

  // a timer is "running" while any timer is still on
  const running = timers.some((t) => t.isOn)

  // tick every second while something is running
  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((t) => {
          if (!t.isOn) return t
          if (t.duration > 1) return { ...t, duration: t.duration - 1 }
          // reached zero this tick
          return { ...t, duration: 0, isOn: false }
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [running])

  const addTimer = (newTimer: TimerData) =>
    setTimers((prev) => prev.concat(newTimer))
  const deleteTimer = (id: string) =>
    setTimers((prev) => prev.filter((t) => t.id !== id))

  const compact = timers.length > 0

  return (
    <>
      <div
        className={`border-b border-neutral-300 tablet:px-8 tablet:pb-0 ${
          compact ? 'tablet:pt-5' : 'tablet:pt-8'
        }`}
      >
        <Header compact={compact} />
        <NewTimer addTimer={addTimer} running={running} compact={compact} />
      </div>
      <div className="flex grow flex-wrap tablet:flex-col tablet:flex-nowrap [&>div:nth-child(3n)]:grow">
        {timers.map((t) => (
          <Timer
            key={t.id}
            id={t.id}
            name={t.name}
            duration={t.duration}
            isOn={t.isOn}
            deleteTimer={deleteTimer}
          />
        ))}
      </div>
    </>
  )
}
