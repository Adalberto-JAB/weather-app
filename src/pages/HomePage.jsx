import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importa todos los hooks y componentes necesarios
import { useWeather } from "../hooks/useWeather";
import SearchForm from "../components/SearchForm";
import FavoritesModal from "../components/FavoritesModal";
import Loader from "../components/Loader";
import ThemeToggle from "../components/ThemeToggle";
import FloatingLegend from "../components/FloatingLegend";
import CitySelectionModal from "../components/CitySelectionModal";
import WeatherResults from "../components/homePageComponents/WeatherResults";

// Componente principal de la página
const HomePage = () => {
  const {
    currentWeather, // Datos del clima actual.
    forecast, // Pronóstico de 5 días.
    favorites, // Lista de ciudades favoritas.
    loading, // Estado de carga.
    error, // Mensaje de error.
    availableCities, // Lista de ciudades encontradas si hay múltiples coincidencias.
    searchCity, // Función para buscar ciudades.
    selectCityFromList, // Función para seleccionar una ciudad de la lista.
    addFavorite, // Función para añadir a favoritos.
  } = useWeather();

  // Verifica si la ciudad actualmente mostrada es una favorita.
  const isCurrentCityFavorite = currentWeather
    ? favorites.some((fav) => fav.id === currentWeather.id)
    : false;
  return (
    <div className="p-4 font-inter flex flex-col items-center relative">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full flex justify-between lg:px-32">
        <div>
          <FavoritesModal />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      <hr className="w-full my-1 border-gray-300 dark:border-gray-700" />
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center mt-2 lg:mt-6 mb-3 lg:mb-4 text-text-primary">
        El Oráculo del Clima
      </h1>
      {/* Formulario de búsqueda de ciudades. */}
      <SearchForm onSearch={searchCity} />{" "}
      <hr className="w-full my-1 border-gray-300 dark:border-gray-700" />
      {loading && <Loader />}
      {error && (
        <div
          className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mb-6 w-full max-w-xl mx-auto"
          role="alert"
        >
          <strong className="font-bold">¡Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      {/* Muestra el modal de selección de ciudad si hay múltiples coincidencias. */}
      {availableCities.length > 1 && (
        <CitySelectionModal
          cities={availableCities} // Pasa la lista de ciudades disponibles.
          onSelectCity={selectCityFromList} // Pasa la función para seleccionar una ciudad.
          onClose={() => selectCityFromList(null)} // Función para cerrar el modal sin seleccionar.
        />
      )}
      <WeatherResults
        currentWeather={currentWeather}
        forecast={forecast}
        onAddFavorite={() => addFavorite(currentWeather)}
        isCurrentCityFavorite={isCurrentCityFavorite}
      />
      <hr className="w-full my-9 border-gray-300 dark:border-gray-700" />
      <FloatingLegend />
    </div>
  );
};

export default HomePage;
