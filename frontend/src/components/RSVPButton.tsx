// CONCEPT 2: useState — local state inside a component
//
// useState(initialValue) returns [currentValue, setterFunction].
// Every time you call the setter, React re-renders the component
// with the new value. The rest of the page is untouched.

import { useState } from 'react'

export default function RSVPButton() {
  // `confirmed` starts as false. `setConfirmed` changes it.
  const [confirmed, setConfirmed] = useState(false)

  // Event handler — a plain function, called when the button is clicked.
  function handleClick() {
    setConfirmed(true)
  }

  // Conditional rendering: show different JSX based on state.
  if (confirmed) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl">🌸</p>
        <p className="text-stone-700 font-medium mt-2">Terima kasih! Kami menantikan kehadiran anda.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-3 py-8 px-6">
      <p className="text-stone-600 text-sm">Adakah anda dapat hadir?</p>
      <button
        onClick={handleClick}
        className="bg-amber-700 text-white px-8 py-3 rounded-full text-sm tracking-wide hover:bg-amber-800 active:scale-95 transition-all"
      >
        Ya, Saya Hadir
      </button>
    </div>
  )
}
