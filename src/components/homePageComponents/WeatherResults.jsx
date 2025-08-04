import WeatherMap from "../WeatherMap";
import CurrentWeatherDisplay from "./CurrentWeatherDisplay";
import ForecastDisplay from "./ForecastDisplay ";

// Componente que engloba y coordina la visualización de todos los resultados del clima
const WeatherResults = ({ currentWeather, forecast, onAddFavorite, isCurrentCityFavorite }) => {
  if (!currentWeather) {
    return null;
  }
  return (
    <>
      <CurrentWeatherDisplay
        currentWeather={currentWeather}
        onAddFavorite={onAddFavorite}
        isCurrentCityFavorite={isCurrentCityFavorite}
      />
      
      <ForecastDisplay forecast={forecast} />

      {currentWeather.coord && (
        <WeatherMap
          latitude={currentWeather.coord.lat}
          longitude={currentWeather.coord.lon}
          cityName={currentWeather.name}
        />
      )}
    </>
  );
};

export default WeatherResults;
