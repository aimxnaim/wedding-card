import type { ReactNode } from 'react'

type Tab = 'location' | 'gift'

type BottomNavProps = {
  activeTab: Tab | null
  onTabClick: (tab: Tab) => void
}

const tabs: { id: Tab; label: string; icon: ReactNode }[] = [
  {
    id: 'location',
    label: 'Lokasi',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'gift',
    label: 'Hadiah',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
]

export default function BottomNav({ activeTab, onTabClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-stone-200 shadow-lg z-50">
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`relative flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                isActive ? 'text-amber-700' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {tab.icon}
              <span className="text-xs font-medium">{tab.label}</span>
              {isActive && <span className="absolute bottom-0 w-12 h-0.5 bg-amber-700 rounded-full" />}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
