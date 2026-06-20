// CONCEPT 4: useEffect — running code outside of rendering
//
// useEffect(fn, deps) runs `fn` after the component renders.
// The deps array controls WHEN it re-runs:
//   []          → run once after first render (like "on mount")
//   [a, b]      → re-run whenever `a` or `b` changes
//   (omitted)   → run after EVERY render (rarely what you want)
//
// Return a cleanup function to avoid memory leaks (e.g. clear intervals).

import { useState, useEffect } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

type CountdownProps = {
  targetDate: Date
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate))

  useEffect(() => {
    // Set up an interval that fires every second
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate))
    }, 1000)

    // Cleanup: clear the interval when the component is removed from the page
    return () => clearInterval(interval)
  }, [targetDate]) // Re-run only if targetDate changes

  const units = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Minit', value: timeLeft.minutes },
    { label: 'Saat', value: timeLeft.seconds },
  ]

  return (
    <section className="px-6 py-10 bg-amber-50">
      <p className="text-center text-xs tracking-widest text-amber-700 uppercase mb-6">Lagi</p>
      <div className="flex justify-center gap-4">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-serif text-stone-800 tabular-nums w-14 text-center">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-xs text-stone-400">{unit.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
