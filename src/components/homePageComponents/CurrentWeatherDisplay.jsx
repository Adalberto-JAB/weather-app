import CityCard from "../CityCard";

// Componente para mostrar la tarjeta del clima actual
const CurrentWeatherDisplay = ({ currentWeather, onAddFavorite, isCurrentCityFavorite }) => {
  return (
    <div className="mb-12 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
        Clima Actual
      </h2>
      <div className="flex justify-center">
        <CityCard
          city={currentWeather}
          onAddFavorite={onAddFavorite}
          isFavorite={isCurrentCityFavorite}
        />
      </div>
    </div>
  );
};

export default CurrentWeatherDisplay;
