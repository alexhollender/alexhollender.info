"use client";
import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { TimerData } from "./types";

interface Fields {
  name: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const EMPTY: Fields = { name: "", hours: "", minutes: "", seconds: "" };

interface NewTimerProps {
  addTimer: (timer: TimerData) => void;
  running: boolean;
  compact: boolean;
}

const inputGroup = "flex flex-col";
const labelClass = "mb-2 font-sans";
const colonClass = "mx-1.5 mb-3 text-3xl";
const numberInput =
  "h-12 w-16 border border-transparent bg-neutral-100 p-0 pl-4 font-sans text-3xl placeholder:text-neutral-400 focus:border-black focus:outline-none";

export default function NewTimer({
  addTimer,
  running,
  compact,
}: NewTimerProps) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [show, setShow] = useState(true);

  // when all timers stop, show the form again
  useEffect(() => {
    if (!running) setShow(true);
  }, [running]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const total =
      Number(fields.hours) * 3600 +
      Number(fields.minutes) * 60 +
      Number(fields.seconds);
    if (!total) return;
    addTimer({
      id: crypto.randomUUID(),
      name: fields.name,
      duration: total,
      isOn: true,
    });
    setFields(EMPTY);
    setShow(false);
  };

  const hasTime = fields.hours || fields.minutes || fields.seconds;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`mx-auto flex w-fit items-end transition-all duration-300 tablet:m-0 tablet:w-full tablet:flex-col tablet:items-start ${
          compact
            ? "pb-12 pt-10 tablet:pb-8 tablet:pt-5"
            : "pb-32 pt-32 tablet:pb-10 tablet:pt-10"
        } ${show ? "" : "tablet:hidden"}`}
      >
        <div className={`${inputGroup} tablet:mb-5`}>
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
            className="mr-11 h-12 w-72 border border-transparent bg-neutral-100 p-0 pl-4 font-serif text-title placeholder:text-neutral-400 focus:border-black focus:outline-none tablet:mr-0 tablet:w-[calc(100%_-_15px)] tablet:text-2xl"
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
          className={`ml-11 h-12 cursor-pointer border border-black bg-transparent px-5 text-xl tablet:ml-0 tablet:mt-5 tablet:w-[calc(100%_-_15px)] tablet:p-0 ${
            hasTime ? "" : "cursor-default opacity-25"
          }`}
        >
          {" "}
          Start timer
        </button>
      </form>

      {/* shown on mobile when the form is hidden; reveals the form again */}
      <button
        onClick={() => setShow(true)}
        className={`my-5 hidden h-12 w-[calc(100%_-_15px)] cursor-pointer border border-black bg-transparent text-xl ${
          show ? "" : "tablet:block"
        }`}
      >
        Add timer
      </button>
    </div>
  );
}
