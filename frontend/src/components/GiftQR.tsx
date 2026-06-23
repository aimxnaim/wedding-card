const BANK_NAME = 'Maybank'
const ACCOUNT_NAME = 'Muhammad Aiman Naim'
const ACCOUNT_NUMBER = '1234 5678 9012'

// QR code encodes the account info as a simple string; replace with real DuitNow QR data
const QR_DATA = encodeURIComponent(`${BANK_NAME} | ${ACCOUNT_NAME} | ${ACCOUNT_NUMBER.replace(/\s/g, '')}`)

export default function GiftQR() {
  return (
    <section id="gift" className="px-6 py-10">
      <h2 className="text-center text-xs tracking-widest text-amber-700 uppercase mb-2">Hadiah & Sumbangan</h2>
      <p className="text-center text-stone-400 text-xs mb-8">Kehadiran anda sudah memadai, namun jika ingin memberi hadiah:</p>

      {/* Bank transfer card */}
      <div className="border border-stone-200 rounded-2xl p-5 bg-white shadow-sm mb-6">
        <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-3">Pindahan Bank</p>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-stone-400">Bank</span>
            <span className="text-sm text-stone-800 font-medium">{BANK_NAME}</span>
          </div>
          <div className="h-px bg-stone-100" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-stone-400">Nama</span>
            <span className="text-sm text-stone-800 font-medium">{ACCOUNT_NAME}</span>
          </div>
          <div className="h-px bg-stone-100" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-stone-400">No. Akaun</span>
            <button
              className="text-sm text-amber-700 font-mono font-medium active:scale-95 transition-transform"
              onClick={() => navigator.clipboard.writeText(ACCOUNT_NUMBER.replace(/\s/g, ''))}
            >
              {ACCOUNT_NUMBER}
            </button>
          </div>
        </div>
      </div>

      {/* QR code card */}
      <div className="border border-stone-200 rounded-2xl p-5 bg-white shadow-sm flex flex-col items-center">
        <p className="text-xs text-amber-700 font-medium uppercase tracking-wide mb-4">DuitNow QR</p>

        <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&color=78350f&bgcolor=fffbeb&data=${QR_DATA}`}
            alt="DuitNow QR Code"
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>

        <p className="text-xs text-stone-400 mt-3 text-center">Imbas QR untuk pindahan mudah</p>
      </div>
    </section>
  )
}
