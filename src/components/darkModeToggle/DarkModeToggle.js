'use client'
import { useState, useEffect } from 'react'

export default function DarkModeToggle() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.onchange = (e) => {
      if (e.matches) {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    };
  }, [])

  return (
    // hidden button that holds dark mode state
    <button id="darkMode" data-theme-dark={darkMode}></button>
  )
}