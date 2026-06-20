// CONCEPT 3: Rendering lists with .map() + the `key` prop
//
// When you have an array of data, use .map() to turn each item into JSX.
// React needs a unique `key` on each element so it can track changes
// efficiently. Never use array index as key if the list can be reordered.

type Event = {
  id: string
  time: string
  label: string
  venue: string
}

const events: Event[] = [
  { id: 'akad', time: '9:00 pagi', label: 'Akad Nikah', venue: 'Masjid Al-Falah, Shah Alam' },
  { id: 'sanding', time: '12:00 tengahari', label: 'Majlis Sanding', venue: 'Dewan Gemilang, Shah Alam' },
  { id: 'makan', time: '1:00 tengahari', label: 'Jamuan Makan', venue: 'Dewan Gemilang, Shah Alam' },
]

export default function EventSchedule() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-center text-xs tracking-widest text-amber-700 uppercase mb-6">Aturcara Majlis</h2>

      <div className="flex flex-col gap-4">
        {/* .map() turns each Event object into a JSX block */}
        {events.map((event) => (
          // `key` must be unique among siblings — use a real ID, not index
          <div key={event.id} className="border border-stone-200 rounded-xl p-4 bg-white shadow-sm">
            <p className="text-xs text-amber-700 font-medium">{event.time}</p>
            <p className="text-stone-800 font-serif text-lg">{event.label}</p>
            <p className="text-stone-400 text-xs mt-1">{event.venue}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
