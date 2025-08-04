// Importa iconos de clima de 'react-icons/wi'.
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiCloud, WiNightClear } from 'react-icons/wi';
// Importa iconos de corazón (vacío y lleno) de 'react-icons/fa' para la funcionalidad de favoritos.
import { FaRegHeart, FaHeart } from 'react-icons/fa';

// Mapea los códigos de icono de OpenWeatherMap a componentes de React-Icons.
const weatherIconMap = {
  '01d': <WiDaySunny size={64} />,      // clear sky (day)
  '01n': <WiNightClear size={64} />,    // clear sky (night)
  '02d': <WiCloud size={64} />,         // few clouds (day)
  '02n': <WiCloud size={64} />,         // few clouds (night)
  '03d': <WiCloudy size={64} />,        // scattered clouds (day)
  '03n': <WiCloudy size={64} />,        // scattered clouds (night)
  '04d': <WiCloudy size={64} />,        // broken clouds (day)
  '04n': <WiCloudy size={64} />,        // broken clouds (night)
  '09d': <WiRain size={64} />,          // shower rain (day)
  '09n': <WiRain size={64} />,          // shower rain (night)
  '10d': <WiRain size={64} />,          // rain (day)
  '10n': <WiRain size={64} />,          // rain (night)
  '11d': <WiThunderstorm size={64} />,  // thunderstorm (day)
  '11n': <WiThunderstorm size={64} />,  // thunderstorm (night)
  '13d': <WiSnow size={64} />,          // snow (day)
  '13n': <WiSnow size={64} />,          // snow (night)
  '50d': <WiFog size={64} />,           // mist (day)
  '50n': <WiFog size={64} />,           // mist (night)
};

const CityCard = ({ city, onAddFavorite, isFavorite }) => {
  if (!city) {
    return null;
  }

  const { name, main, weather, sys, wind } = city;
  const iconCode = weather[0]?.icon;
  const weatherDescription = weather[0]?.description;
  const country = sys?.country;
  const state = city.state; 
  // Construye la descripción de la ubicación, incluyendo el estado si existe.
  const locationDetails = `${name}${state ? `, ${state}` : ''}, ${country}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 my-4 w-full max-w-sm mx-auto flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{locationDetails}</h2>
        <button
          onClick={onAddFavorite}
          className={`p-2 rounded-full transition-colors duration-200 ${
            isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-red-500'
          }`}
          title={isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        >
          {isFavorite ? <FaHeart size={30} className="text-red-500" /> : <FaRegHeart size={30} className="text-gray-400" />}
        </button>
      </div>

      <div className="flex items-center my-4">
        {weatherIconMap[iconCode] || <WiCloudy size={64} />}
        <p className="text-5xl font-bold ml-4 text-blue-600 dark:text-blue-400">{Math.round(main.temp)}°C</p>
      </div>
      <p className="text-xl text-gray-700 dark:text-gray-300 capitalize mb-2">{weatherDescription}</p>
      <div className="text-gray-600 dark:text-gray-400 text-center">
        <p>Sensación térmica: {Math.round(main.feels_like)}°C</p>
        <p>Humedad: {main.humidity}%</p>
        <p>Viento: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default CityCard;
