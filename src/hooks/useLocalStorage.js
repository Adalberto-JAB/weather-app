import { useState, useEffect } from 'react'; 

const useLocalStorage = (key, initialValue) => {
  // Estado para almacenar nuestro valor.
  // La función de inicialización se ejecuta solo una vez al montar el componente.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Intenta obtener el elemento de localStorage usando la clave proporcionada.
      const item = window.localStorage.getItem(key);
      // Parsea el JSON o devuelve el valor inicial si no hay nada guardado.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Registra cualquier error que ocurra al leer de localStorage (ej. JSON inválido), lo registra.
      console.error('Error al leer de localStorage:', error);
      // Devuelve el valor inicial para que la aplicación siga funcionando.
      return initialValue;
    }
  });

  // useEffect para actualizar localStorage cuando el valor almacenado cambia.
  useEffect(() => {
    try {
      // Guarda el valor actual en localStorage, serializándolo a una cadena JSON.
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Captura cualquier error que ocurra al escribir en localStorage (ej. cuota excedida).
      console.error('Error al escribir en localStorage:', error);
    }
  }, [key, storedValue]); // Las dependencias aseguran que este efecto se re-ejecute cuando 'key' o 'storedValue' cambien.

  // Retorna un array con el valor almacenado y la función para actualizarlo, similar a 'useState'.
  return [storedValue, setStoredValue];
}

export default useLocalStorage; 
