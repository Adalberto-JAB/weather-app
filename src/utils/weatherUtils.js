/**
 * Convierte una temperatura de Kelvin a Celsius.
 * @param {number} kelvin - Temperatura en grados Kelvin.
 * @returns {string} Temperatura en grados Celsius, redondeada a un número entero.
 */
export const kelvinToCelsius = (kelvin) => {
  if (typeof kelvin !== 'number') {
    return 'N/A'; // Retorna "N/A" si la entrada no es un número.
  }
  return (kelvin - 273.15).toFixed(0); // Resta 273.15 para convertir a Celsius y redondea.
};

/**
 * Convierte una temperatura de Kelvin a Fahrenheit.
 * @param {number} kelvin - Temperatura en grados Kelvin.
 * @returns {string} Temperatura en grados Fahrenheit, redondeada a un número entero.
 */
export const kelvinToFahrenheit = (kelvin) => {
  if (typeof kelvin !== 'number') {
    return 'N/A'; // Retorna "N/A" si la entrada no es un número.
  }
  return ((kelvin - 273.15) * 9/5 + 32).toFixed(0); // Convierte a Fahrenheit y redondea.
};
