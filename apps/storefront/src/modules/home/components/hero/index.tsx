const Hero = () => {
  return (
    <div className="h-[75vh] w-full flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-yellow-100">
      <div className="text-center px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
          Nueva temporada
        </p>

        <h1 className="text-6xl font-bold tracking-tight">
          DEYSISTORE
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-xl mx-auto">
          Encuentra productos modernos, accesibles y pensados para tu estilo.
        </p>

        <button className="mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-semibold">
          Ver catálogo
        </button>
      </div>
    </div>
  )
}

export default Hero
