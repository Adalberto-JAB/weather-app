const CitySelectionModal = ({ cities, onSelectCity, onClose }) => {
  // Si no hay ciudades o la lista está vacía, no renderiza el modal.
  if (!cities || cities.length === 0) {
    return null;
  }

  return (
    // Contenedor principal del modal, con overlay oscuro y centrado.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      {/* Contenido del modal: fondo, redondeado, sombra, scroll si es necesario. */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative shadow-2xl max-h-[80vh] overflow-y-auto">
        {/* Botón para cerrar el modal. */}
        <button
          onClick={onClose} // Llama a la función onClose pasada por props.
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 text-2xl"
          title="Cerrar"
        >
          &times; {/* Símbolo de cruz para cerrar. */}
        </button>
        {/* Título del modal. */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Múltiples Ciudades Encontradas
        </h2>
        {/* Instrucción para el usuario. */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Por favor, selecciona la ciudad deseada:
        </p>

        {/* Lista de ciudades encontradas. */}
        <ul className="space-y-3">
          {cities.map((city, index) => (
            // Cada elemento de la lista es un botón para seleccionar una ciudad.
            <li key={`${city.lat}-${city.lon}-${index}`} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-b-0 last:pb-0">
              <button
                onClick={() => onSelectCity(city)} // Llama a onSelectCity con el objeto de la ciudad.
                className="w-full text-left p-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {/* Nombre de la ciudad. */}
                <span className="font-semibold text-gray-900 dark:text-white text-lg">{city.name}</span>
                <br />
                {/* Detalles de la ciudad (estado, país, coordenadas). */}
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {city.state ? `${city.state}, ` : ''}{city.country} (Lat: {city.lat.toFixed(2)}, Lon: {city.lon.toFixed(2)})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CitySelectionModal; 
