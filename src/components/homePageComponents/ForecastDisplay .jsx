import ForecastCard from "../ForecastCard";

// Componente para mostrar el pronóstico de los próximos días
const ForecastDisplay = ({ forecast }) => {
  return (
    <div className="mb-12 w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-text-primary mb-6 text-center">
        Pronóstico Próximos 5 Días
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-4">
        {forecast.map((dayForecast, index) => (
          <ForecastCard key={index} dayForecast={dayForecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
