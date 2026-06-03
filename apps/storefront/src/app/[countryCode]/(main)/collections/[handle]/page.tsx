import { Metadata } from "next"

type Props = {
  params: Promise<{ handle: string; countryCode: string }>
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Colección | DEYSISTORE",
    description: "Colección de productos DEYSISTORE",
  }
}

export default async function CollectionPage(props: Props) {
  const params = await props.params

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Colección próximamente</h1>
        <p className="text-gray-600">
          Estamos preparando esta sección de DEYSISTORE.
        </p>
        <a
          href={`/${params.countryCode}`}
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-full"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  )
}