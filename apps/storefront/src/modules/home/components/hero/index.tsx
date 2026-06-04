const Hero = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-gradient-to-r from-pink-50 via-white to-yellow-50">
      <div className="text-center px-6 max-w-4xl">
        <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
          Novedades cada semana
        </span>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          Todo lo que necesitas
          <br />
          en un solo lugar
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre accesorios, regalos, productos para el hogar, snacks y mucho
          más. Calidad, variedad y precios accesibles para todos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Ver productos
          </button>

          <button className="border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition">
            Ver novedades
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✓ Productos seleccionados</span>
          <span>✓ Nuevas colecciones</span>
          <span>✓ Compra segura</span>
        </div>
      </div>
    </div>
  )
}

export default Hero