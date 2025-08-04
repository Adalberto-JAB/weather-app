const FloatingLegend = () => {
  return (
    // Contenedor de la leyenda flotante con estilos de Tailwind para posicionamiento y apariencia.
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg text-sm z-40">
      {/* Texto de la leyenda. */}
      <p>Datos proporcionados por: OpenWeatherMap</p>
      {/* Puedes añadir más elementos a la leyenda aquí. */}
    </div>
  );
}

export default FloatingLegend;
