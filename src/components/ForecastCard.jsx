const ForecastCard = ({ dayForecast }) => {
  // Convierte la temperatura de Kelvin a Celsius (si tus datos están en Kelvin).
  // Si tu API ya devuelve en Celsius, esta función no sería necesaria o debería adaptarse.
  // const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(0);

  return (
    // Contenedor de la tarjeta de pronóstico con estilos de Tailwind.
    <div className="flex w-full justify-center">
      <div className="flex-shrink-0 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center">
        {/* Fecha del pronóstico. */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {new Date(dayForecast.dt * 1000).toLocaleDateString("es-AR", {
            weekday: "short",
            day: "numeric",
          })}
        </h3>
        {/* Icono del clima (puedes integrar un mapeo de iconos si tienes). */}
        <p className="text-4xl">
          {dayForecast.icon ? (
            <img
              src={`http://openweathermap.org/img/wn/${dayForecast.icon}@2x.png`}
              alt={dayForecast.description}
              className="mx-auto w-16 h-16"
            />
          ) : (
            "☁️"
          )}
        </p>
        {/* Descripción del clima. */}
        <p className="text-gray-700 dark:text-gray-300 capitalize text-sm mb-2">
          {dayForecast.description}
        </p>
        {/* Temperaturas máxima y mínima. */}
        <p className="text-blue-600 dark:text-blue-400 font-bold">
          Máx: {Math.round(dayForecast.temp_max)}°C
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Mín: {Math.round(dayForecast.temp_min)}°C
        </p>
      </div>
    </div>
  );
};

export default ForecastCard; 
