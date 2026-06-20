// CONCEPT 1: JSX + Props
//
// A component is just a function that returns HTML-like syntax (JSX).
// Props = data passed from parent to child, like function arguments.
// TypeScript: we define the shape of props with `type` or `interface`.

type CoupleNamesProps = {
  groomName: string
  brideName: string
  weddingDate: string
}

// This component only RECEIVES data — it never changes it.
// That makes it simple, reusable, and easy to test.
export default function CoupleNames({ groomName, brideName, weddingDate }: CoupleNamesProps) {
  return (
    <section className="flex flex-col items-center gap-4 py-12 px-6 text-center">
      <p className="text-sm tracking-widest text-amber-700 uppercase">Dengan Penuh Rasa Syukur</p>

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl font-serif text-stone-800">{groomName}</h1>
        <span className="text-2xl text-amber-600">&</span>
        <h1 className="text-4xl font-serif text-stone-800">{brideName}</h1>
      </div>

      {/* JSX uses {} to run any JavaScript expression */}
      <p className="text-stone-500 text-sm mt-2">{weddingDate}</p>
    </section>
  )
}
