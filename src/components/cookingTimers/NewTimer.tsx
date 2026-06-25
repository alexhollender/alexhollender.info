'use client'
import { useState, useEffect } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { TimerData } from './types'

interface Fields {
  name: string
  hours: string
  minutes: string
  seconds: string
}

const EMPTY: Fields = { name: '', hours: '', minutes: '', seconds: '' }

interface NewTimerProps {
  addTimer: (timer: TimerData) => void
  running: boolean
}

export default function NewTimer({ addTimer, running }: NewTimerProps) {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [show, setShow] = useState(true)

  // when all timers stop, show the form again
  useEffect(() => {
    if (!running) setShow(true)
  }, [running])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const total =
      Number(fields.hours) * 3600 +
      Number(fields.minutes) * 60 +
      Number(fields.seconds)
    if (!total) return
    addTimer({
      id: crypto.randomUUID(),
      name: fields.name,
      duration: total,
      isOn: true,
    })
    setFields(EMPTY)
    setShow(false)
  }

  const hasTime = fields.hours || fields.minutes || fields.seconds

  return (
    <div id="newTimer" className={show ? 'show' : 'hideForMobile'}>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="timerName">Timer name</label>
          <input
            type="text"
            id="timerName"
            name="name"
            placeholder="Untitled timer"
            onChange={handleChange}
            value={fields.name}
          />
        </div>

        <div className="numberInputsContainer">
          <div className="input-group">
            <label htmlFor="timerHours">Hours</label>
            <input
              type="number"
              min="0"
              id="timerHours"
              name="hours"
              placeholder="00"
              onChange={handleChange}
              value={fields.hours}
            />
          </div>

          <div className="colon">:</div>

          <div className="input-group">
            <label htmlFor="timerMinutes">Minutes</label>
            <input
              type="number"
              min="0"
              id="timerMinutes"
              name="minutes"
              placeholder="00"
              onChange={handleChange}
              value={fields.minutes}
              autoFocus
            />
          </div>

          <div className="colon">:</div>

          <div className="input-group">
            <label htmlFor="timerSeconds">Seconds</label>
            <input
              type="number"
              min="0"
              id="timerSeconds"
              name="seconds"
              placeholder="00"
              onChange={handleChange}
              value={fields.seconds}
            />
          </div>
        </div>

        <button className={hasTime ? 'enabled' : 'disabled'} id="button">
          {' '}
          Start timer
        </button>
      </form>

      {/* shown on mobile when the form is hidden; reveals the form again */}
      <button id="showForm" onClick={() => setShow(true)}>
        Add timer
      </button>
    </div>
  )
}
