import { useTheme } from '../hooks/useTheme'; // Importa el hook useTheme para acceder al contexto del tema.
import CustomButton from './CustomButton'; // Importa el componente CustomButton.
import { MoonFill, SunFill } from 'react-bootstrap-icons'; // Importa iconos de luna y sol.

const ThemeToggle = () => {
  // Obtiene el tema actual y la función para alternar el tema del contexto.
  const { theme, toggleTheme } = useTheme();

  return (
    // Botón personalizado para alternar el tema.
    <CustomButton
      onClick={toggleTheme} // Llama a toggleTheme al hacer clic.
      type="secondary" // Usa el estilo secundario del botón.
      className="p-0 text-2xl" // Clases adicionales para el diseño.
    >
      {/* Muestra el texto y el icono según el tema actual. */}
      {/* {theme === "light" ? "Tema Oscuro" : "Tema Claro"} */}
      {theme === "light" ? <MoonFill className='text-gray-200' /> : <SunFill className="text-yellow-400" />}
    </CustomButton>
  );
}

export default ThemeToggle; 
