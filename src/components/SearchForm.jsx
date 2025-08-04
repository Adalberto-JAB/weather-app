import { useState } from 'react'; 

const SearchForm = ({ onSearch }) => {
  // Estado local para almacenar el valor del input de la ciudad.
  const [city, setCity] = useState('');

  // Manejador del evento de envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página.
    if (city.trim()) { // Verifica que city no esté vacío o solo contenga espacios en blanco.
      onSearch(city.trim()); // Llama a la función onSearch (pasada por props) con el nombre de la ciudad.
      setCity('');
    }
  };

  return (
    // Formulario de búsqueda con estilos flexbox responsivos.
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center p-4 w-full max-w-xl">
      {/* Campo de entrada para el nombre de la ciudad. */}
      <input
        type="text"
        placeholder="Escribe el nombre de una ciudad"
        value={city} // El valor del input está controlado por el estado 'city'.
        onChange={(e) => setCity(e.target.value)} // Actualiza el estado 'city' con cada cambio.
        className="text-center w-full sm:w-min flex-grow py-1.5 px-2 sm:p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      {/* Botón para enviar el formulario y buscar el clima. */}
      <button
        type="submit"
        className="px-4 py-1 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        Buscar Clima
      </button>
    </form>
  );
}

export default SearchForm; 
