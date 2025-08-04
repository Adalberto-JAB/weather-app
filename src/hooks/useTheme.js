import { useContext } from 'react'; // Importa useContext.
import { ThemeContext } from '../context/ThemeContext.jsx'; // Importa el objeto ThemeContext.

// Hook personalizado para consumir el contexto del tema.
export const useTheme = () => {
  // Intenta obtener el valor del ThemeContext.
  const context = useContext(ThemeContext);
  // Si el contexto no ha sido provisto, lanza un error.
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context; // Retorna el valor del contexto.
};
