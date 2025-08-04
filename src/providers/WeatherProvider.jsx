import { useState } from 'react'; 
import { getWeatherData, searchCityCandidates } from '../services/weatherService'; 
import useLocalStorage from '../hooks/useLocalStorage'; 
import { useNotification } from '../hooks/useNotification'; 
import { toast } from 'react-toastify'; // Librería para notificaciones toast.
import { WeatherContext } from '../context/WeatherContext'; 

export const WeatherProvider = ({ children }) => {
  // Estados para almacenar los datos del clima, carga, errores y favoritos.
  const [currentWeather, setCurrentWeather] = useState(null); // Datos del clima de la ciudad actualmente mostrada.
  const [forecast, setForecast] = useState([]); // Pronóstico de 5 días de la ciudad actual.
  const [favorites, setFavorites] = useLocalStorage('weatherFavorites', []); 
  const [loading, setLoading] = useState(false); // Estado de carga (true si hay una operación en curso).
  const [error, setError] = useState(null); // Mensaje de error si ocurre alguno.
  const [availableCities, setAvailableCities] = useState([]); // Lista de ciudades encontradas si hay múltiples coincidencias.
  const { showNotification } = useNotification(); // Obtiene la función para mostrar notificaciones personalizadas.

  /**
   * Busca ciudades por nombre. Si hay una coincidencia exacta, muestra el clima.
   * Si hay múltiples, las presenta al usuario para que elija.
   * @param {string} cityName - Nombre de la ciudad a buscar.
   */
  const searchCity = async (cityName) => {
    setLoading(true); // Activa el estado de carga.
    setError(null); // Limpia cualquier error anterior.
    setCurrentWeather(null); // Limpia los datos del clima actual.
    setForecast([]); // Limpia el pronóstico.
    setAvailableCities([]); // Limpia la lista de ciudades disponibles.
    showNotification('Buscando ciudades...'); // Muestra una notificación de búsqueda.

    try {
      const candidates = await searchCityCandidates(cityName); // Busca candidatos de ciudad.
      if (candidates.length === 0) {
        // Si no se encontraron ciudades.
        setError(`No hay coincidencias para el nombre: ${cityName}`); // Establece el mensaje de error.
        toast.error(`No hay ciudades con el nombre: ${cityName}`); // Muestra un toast de error.
      } else if (candidates.length === 1) {
        // Si solo hay una coincidencia, obtiene y muestra su clima directamente.
        const selectedCity = candidates[0]; // La única ciudad encontrada.
        const data = await getWeatherData(selectedCity.lat, selectedCity.lon); // Obtiene los datos del clima por coordenadas.
        setCurrentWeather(data.currentWeather); // Establece el clima actual.
        setForecast(data.forecast); // Establece el pronóstico.
        toast.success(`Clima de ${selectedCity.name} obtenido con éxito.`); // Muestra un toast de éxito.
        showNotification('Carga completada.'); // Muestra notificación.
      } else {
        // Si hay múltiples coincidencias, las almacena para que el usuario elija.
        setAvailableCities(candidates); // Establece la lista de ciudades disponibles.
        toast.info(`Se encontraron ${candidates.length} ciudades. Por favor, selecciona una.`); // Muestra un toast informativo.
        showNotification('Múltiples ciudades encontradas.'); // Muestra notificación.
      }
    } catch (err) {
      // Manejo de errores durante la búsqueda.
      setError(err.message); // Establece el mensaje de error.
      toast.error(err.message); // Muestra un toast de error.
      showNotification(`Error: ${err.message}`); // Muestra notificación de error.
    } finally {
      setLoading(false); // Desactiva el estado de carga.
    }
  };

  /**
   * Selecciona una ciudad de la lista de coincidencias y obtiene su clima.
   * Se llama cuando el usuario elige una opción del modal de selección.
   * @param {object} cityObject - El objeto de la ciudad seleccionada (debe contener lat y lon).
   */
  const selectCityFromList = async (cityObject) => {
    if (!cityObject) { // Si se pasa null (ej. al cerrar el modal sin seleccionar)
      setAvailableCities([]); // Limpia la lista de opciones.
      return;
    }

    setLoading(true); // Activa el estado de carga.
    setError(null); // Limpia errores.
    setAvailableCities([]); // Limpia la lista de opciones una vez que se ha seleccionado una.
    showNotification(`Obteniendo clima para ${cityObject.name}...`); // Muestra notificación.

    try {
      const data = await getWeatherData(cityObject.lat, cityObject.lon); // Obtiene los datos del clima.
      setCurrentWeather(data.currentWeather); // Establece el clima actual.
      setForecast(data.forecast); // Establece el pronóstico.
      toast.success(`Clima de ${cityObject.name} obtenido con éxito.`); // Muestra toast de éxito.
      showNotification('Carga completada.'); // Muestra notificación.
    } catch (err) {
      // Manejo de errores durante la selección.
      setError(err.message); // Establece el mensaje de error.
      toast.error(err.message); // Muestra toast de error.
      showNotification(`Error: ${err.message}`); // Muestra notificación de error.
    } finally {
      setLoading(false); // Desactiva el estado de carga.
    }
  };

  /**
   * Agrega una ciudad a la lista de favoritos.
   * @param {object} city - Objeto de la ciudad a agregar (debe ser el objeto 'currentWeather').
   */
  const addFavorite = (city) => {
    // Verifica si la ciudad ya está en favoritos para evitar duplicados. 
    const isAlreadyFavorite = favorites.some(fav => fav.id === city.id);
    if (isAlreadyFavorite) {
      toast.info(`${city.name} ya está en tu lista de favoritos.`); // Notifica al usuario.
      return;
    }
    setFavorites(prevFavorites => [...prevFavorites, city]); // Añade la ciudad a favoritos.
    toast.success(`${city.name} ha sido agregada a favoritos.`); // Muestra toast de éxito.
  };

  /**
   * Elimina una ciudad de la lista de favoritos.
   * @param {number} cityId - ID de la ciudad a eliminar.
   */
  const removeFavorite = (cityId) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== cityId)); // Filtra la lista para eliminar la ciudad.
    toast.info('Ciudad eliminada de favoritos.'); // Muestra toast informativo.
  };

  /**
   * Busca los datos del clima de una ciudad favorita.
   * Ahora, reutiliza 'selectCityFromList' para obtener el clima por coordenadas de la ciudad favorita.
   * @param {object} favoriteCityObject - Objeto completo de la ciudad favorita (con lat y lon).
   */
  const fetchFavoriteWeather = (favoriteCityObject) => {
    selectCityFromList(favoriteCityObject); // Llama a selectCityFromList con el objeto de la ciudad favorita.
  };

  // Objeto con los valores que se pasarán a los consumidores del contexto.
  const value = {
    currentWeather,
    forecast,
    favorites,
    loading,
    error,
    availableCities, 
    searchCity, 
    selectCityFromList, 
    addFavorite,
    removeFavorite,
    fetchFavoriteWeather,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
