import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estude',
}

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-white">
        <h1>pagina estude</h1>
        <h1>section 1</h1>
      </section>
      <section className="h-screen bg-pink-400">
        <h1>section 1</h1>
      </section>
    </main>
  )
}
