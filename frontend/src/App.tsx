// CONCEPT 5: Composition — building a page from small components
//
// App is the root. It owns the data and passes it down via props.
// Each child component only knows about its own little piece of the UI.
// This is the core mental model of React: data flows DOWN (props),
// events flow UP (callback functions passed as props).

import { useState } from 'react'
import CoupleNames from './components/CoupleNames'
import RSVPButton from './components/RSVPButton'
import EventSchedule from './components/EventSchedule'
import Countdown from './components/Countdown'
import LocationMap from './components/LocationMap'
import GiftQR from './components/GiftQR'
import BottomNav from './components/BottomNav'
import './App.css'

// All the wedding data lives here — easy to find and change later.
const WEDDING_DATE = new Date('2026-10-10T09:00:00')

type Tab = 'location' | 'gift'

function App() {
  const [activeTab, setActiveTab] = useState<Tab | null>(null)

  function handleTabClick(tab: Tab) {
    setActiveTab(tab)
    // Scroll to the section after a brief tick so React renders it first
    setTimeout(() => {
      document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    // A mobile-first wrapper: max width 430px, centered, white background
    <div className="min-h-screen bg-stone-100 flex justify-center">
      <main className="w-full max-w-107.5 bg-white shadow-xl min-h-screen overflow-hidden pb-20">

        {/* Hero banner */}
        <div className="bg-amber-50 h-48 flex items-center justify-center border-b border-amber-100">
          <p className="text-amber-700 font-serif text-lg tracking-widest">بِسْمِ اللّٰهِ</p>
        </div>

        {/* Concept 1 — Props: pass data as attributes */}
        <CoupleNames
          groomName="Muhammad Aiman Naim"
          brideName="Nordiana Sahira"
          weddingDate="10 Oktober 2026 · Shah Alam, Selangor"
        />

        {/* Concept 4 — useEffect: live countdown to the wedding */}
        <Countdown targetDate={WEDDING_DATE} />

        {/* Concept 3 — Lists: render the event schedule */}
        <EventSchedule />

        {/* Concept 2 — useState: interactive RSVP */}
        <RSVPButton />

        {/* Location map section — scrolled to from the bottom nav */}
        <LocationMap />

        {/* Gift / QR code section — scrolled to from the bottom nav */}
        <GiftQR />

        <footer className="text-center text-xs text-stone-300 pb-4 pt-4">
          Jazakallahu Khairan
        </footer>
      </main>

      {/* Sticky bottom navigation */}
      <BottomNav activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  )
}

export default App
