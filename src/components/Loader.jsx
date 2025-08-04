const Loader = () => {
  return (
    // Contenedor centrado para el loader y el mensaje.
    <div className="flex justify-center items-center py-8">
      {/* Animación de spinner. */}
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      {/* Mensaje de carga. */}
      <p className="ml-4 text-gray-700 dark:text-gray-300">Cargando datos del clima...</p>
    </div>
  );
}

export default Loader; 
