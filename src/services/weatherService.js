const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; // Obtiene la clave API desde las variables de entorno de Vite.

const BASE_WEATHER_URL = import.meta.env.VITE_OPENWEATHER_WEATHER_URL; // URL base para el clima actual.
const BASE_FORECAST_URL = import.meta.env.VITE_OPENWEATHER_FORECAST_URL; // URL base para el pronóstico de 5 días.
const BASE_GEOCODING_URL = import.meta.env.VITE_OPENWEATHER_GEOCODING_URL; // URL base para buscar ciudades por nombre.

/**
 * Busca candidatos de ciudades por nombre utilizando la API de Geocodificación de OpenWeatherMap.
 * Retorna un array de objetos de ciudad (con latitud, longitud, nombre, estado y país).
 * @param {string} cityName - El nombre de la ciudad a buscar.
 * @param {number} limit - El número máximo de resultados a devolver (por defecto 5).
 * @returns {Promise<Array>} Un array de objetos de ciudad que coinciden con la búsqueda.
 */
export const searchCityCandidates = async (cityName, limit = 5) => {
  try {
    // Realiza la petición a la API de geocodificación.
    const response = await fetch(`${BASE_GEOCODING_URL}?q=${cityName}&limit=${limit}&appid=${API_KEY}`);
    // Lanza un error si la respuesta no es exitosa.
    if (!response.ok) {
      throw new Error(`Error al buscar ciudades: ${response.statusText}`);
    }
    const data = await response.json(); // Parsea la respuesta JSON.
    return data; // Retorna el array de candidatos de ciudad.
  } catch (error) {
    console.error("Error al buscar candidatos de ciudad:", error); // Registra el error en consola.
    throw error; // Propaga el error.
  }
};

/**
 * Obtiene los datos del clima actual y el pronóstico de 5 días para una ciudad
 * dadas sus coordenadas de latitud y longitud.
 * @param {number} lat - Latitud de la ciudad.
 * @param {number} lon - Longitud de la ciudad.
 * @returns {Promise<object>} Un objeto que contiene 'currentWeather' y 'forecast'.
 */
export const getWeatherData = async (lat, lon) => {
  try {
    // Petición para obtener los datos del clima actual.
    const currentWeatherResponse = await fetch(`${BASE_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`);
    // Lanza un error si la respuesta no es exitosa.
    if (!currentWeatherResponse.ok) {
      throw new Error(`Error al obtener clima actual: ${currentWeatherResponse.statusText}`);
    }
    const currentWeather = await currentWeatherResponse.json(); // Parsea la respuesta del clima actual.

    // Petición para obtener el pronóstico de 5 días (datos cada 3 horas).
    const forecastResponse = await fetch(`${BASE_FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`);
    // Lanza un error si la respuesta no es exitosa.
    if (!forecastResponse.ok) {
      throw new Error(`Error al obtener pronóstico: ${forecastResponse.statusText}`);
    }
    const forecastData = await forecastResponse.json(); // Parsea la respuesta del pronóstico.

    // Procesar el pronóstico para consolidarlo en un pronóstico diario (temperaturas máximas/mínimas por día).
    const dailyForecast = {};
    forecastData.list.forEach(item => {
      // Formatea la fecha para agrupar por día.
      const date = new Date(item.dt * 1000).toLocaleDateString('es-AR', { weekday: 'short', day: 'numeric', month: 'short' });
      if (!dailyForecast[date]) {
        // Si es la primera entrada para este día, inicializa el objeto de pronóstico diario.
        dailyForecast[date] = {
          dt: item.dt,
          temp_max: item.main.temp_max,
          temp_min: item.main.temp_min,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        };
      } else {
        // Si ya existe una entrada para este día, actualiza las temperaturas máxima y mínima.
        dailyForecast[date].temp_max = Math.max(dailyForecast[date].temp_max, item.main.temp_max);
        dailyForecast[date].temp_min = Math.min(dailyForecast[date].temp_min, item.main.temp_min);
      }
    });

    // Convierte el objeto de pronóstico diario a un array, lo ordena por fecha y toma los primeros 5 días.
    const forecastList = Object.values(dailyForecast)
      .sort((a, b) => a.dt - b.dt) // Ordena cronológicamente.
      .slice(0, 5); // Toma solo los primeros 5 días.

    // Retorna el clima actual y el pronóstico procesado.
    return { currentWeather, forecast: forecastList };

  } catch (error) {
    console.error("Error al obtener datos del clima y pronóstico:", error); // Registra el error en consola.
    throw error; // Propaga el error.
  }
};
