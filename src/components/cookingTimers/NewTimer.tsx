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
  compact: boolean
}

const inputGroup = 'flex flex-col'
const labelClass = 'mb-[8px] font-sans'
const colonClass = 'mx-[6px] mb-[12px] text-[28px]'
const numberInput =
  "h-[50px] w-[52px] border border-transparent bg-[#f5f5f5] p-0 pl-[18px] font-sans text-[28px] placeholder:text-[#BCBCBC] focus:border-black focus:outline-none"

export default function NewTimer({ addTimer, running, compact }: NewTimerProps) {
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
    <div>
      <form
        onSubmit={handleSubmit}
        className={`mx-auto flex w-fit items-end transition-all duration-300 max-[900px]:m-0 max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-start ${
          compact
            ? 'pb-[50px] pt-[40px] max-[900px]:pb-[30px] max-[900px]:pt-[20px]'
            : 'pb-[120px] pt-[120px] max-[900px]:pb-[40px] max-[900px]:pt-[40px]'
        } ${show ? '' : 'max-[900px]:hidden'}`}
      >
        <div className={`${inputGroup} max-[900px]:mb-[20px]`}>
          <label htmlFor="timerName" className={labelClass}>
            Timer name
          </label>
          <input
            type="text"
            id="timerName"
            name="name"
            placeholder="Untitled timer"
            onChange={handleChange}
            value={fields.name}
            className="h-[50px] w-[280px] border border-transparent bg-[#f5f5f5] p-0 pl-[15px] font-['Times_New_Roman'] text-[32px] placeholder:text-[#BCBCBC] focus:border-black focus:outline-none mr-[44px] max-[900px]:mr-0 max-[900px]:w-[calc(100%_-_15px)] max-[900px]:text-[26px]"
          />
        </div>

        <div className="flex items-end">
          <div className={inputGroup}>
            <label htmlFor="timerHours" className={labelClass}>
              Hours
            </label>
            <input
              type="number"
              min="0"
              id="timerHours"
              name="hours"
              placeholder="00"
              onChange={handleChange}
              value={fields.hours}
              className={numberInput}
            />
          </div>

          <div className={colonClass}>:</div>

          <div className={inputGroup}>
            <label htmlFor="timerMinutes" className={labelClass}>
              Minutes
            </label>
            <input
              type="number"
              min="0"
              id="timerMinutes"
              name="minutes"
              placeholder="00"
              onChange={handleChange}
              value={fields.minutes}
              autoFocus
              className={numberInput}
            />
          </div>

          <div className={colonClass}>:</div>

          <div className={inputGroup}>
            <label htmlFor="timerSeconds" className={labelClass}>
              Seconds
            </label>
            <input
              type="number"
              min="0"
              id="timerSeconds"
              name="seconds"
              placeholder="00"
              onChange={handleChange}
              value={fields.seconds}
              className={numberInput}
            />
          </div>
        </div>

        <button
          className={`ml-[44px] h-[50px] cursor-pointer border border-black bg-transparent px-[20px] text-[22px] max-[900px]:ml-0 max-[900px]:mt-[20px] max-[900px]:w-[calc(100%_-_15px)] max-[900px]:p-0 ${
            hasTime ? '' : 'cursor-default opacity-25'
          }`}
        >
          {' '}
          Start timer
        </button>
      </form>

      {/* shown on mobile when the form is hidden; reveals the form again */}
      <button
        onClick={() => setShow(true)}
        className={`my-[20px] hidden h-[50px] w-[calc(100%_-_15px)] cursor-pointer border border-black bg-transparent text-[22px] ${
          show ? '' : 'max-[900px]:block'
        }`}
      >
        Add timer
      </button>
    </div>
  )
}
