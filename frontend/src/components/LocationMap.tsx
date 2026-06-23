type Venue = {
  id: string
  name: string
  address: string
  time: string
  mapQuery: string
}

const venues: Venue[] = [
  {
    id: 'akad',
    name: 'Akad Nikah',
    address: 'Masjid Al-Falah, Shah Alam, Selangor',
    time: '9:00 pagi',
    mapQuery: 'Masjid+Al-Falah+Shah+Alam+Selangor',
  },
  {
    id: 'sanding',
    name: 'Majlis Sanding & Jamuan',
    address: 'Dewan Gemilang, Shah Alam, Selangor',
    time: '12:00 tengahari',
    mapQuery: 'Dewan+Gemilang+Shah+Alam+Selangor',
  },
]

export default function LocationMap() {
  return (
    <section id="location" className="px-6 py-10">
      <h2 className="text-center text-xs tracking-widest text-amber-700 uppercase mb-6">Lokasi Majlis</h2>

      <div className="flex flex-col gap-6">
        {venues.map((venue) => (
          <div key={venue.id} className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            {/* Map embed */}
            <div className="h-44 bg-stone-100 relative">
              <iframe
                title={venue.name}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${venue.mapQuery}&output=embed&z=15`}
              />
            </div>

            {/* Venue info */}
            <div className="p-4 bg-white flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-amber-700 font-medium">{venue.time}</p>
                <p className="text-stone-800 font-serif text-base">{venue.name}</p>
                <p className="text-stone-400 text-xs mt-0.5">{venue.address}</p>
              </div>

              {/* Open in Maps button */}
              <a
                href={`https://maps.google.com/?q=${venue.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1.5 bg-amber-700 text-white text-xs px-3 py-2 rounded-full hover:bg-amber-800 active:scale-95 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Buka Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
