import { useEffect } from 'react'; 
import useLocalStorage from '../hooks/useLocalStorage'; 
import { ThemeContext } from '../context/ThemeContext'; 

// Componente Proveedor del Tema.
export const ThemeProvider = ({ children }) => {
  // Usa el hook useLocalStorage para gestionar el estado 'theme' y persistirlo.
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Función para alternar entre los temas 'light' y 'dark'.
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Efecto que se ejecuta cada vez que el valor de 'theme' cambia.
  // Modifica directamente las clases CSS del <body> del documento HTML para aplicar el tema.
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark'); // Elimina clases anteriores
    document.documentElement.classList.add(theme); // Añade la clase 'dark' o 'light' al <html>
    document.body.className = theme === 'dark' ? 'bg-gray-100 text-gray-300' : 'bg-white text-gray-900';
  }, [theme]);

  return (
    // Provee el contexto del tema a los componentes hijos.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
