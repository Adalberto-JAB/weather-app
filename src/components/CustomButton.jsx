const CustomButton = ({ children, onClick, className = '', type = 'primary', ...props }) => {
  
  const baseStyles = 'py-2 px-4 rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  let typeStyles = ''; // Variable para almacenar estilos específicos del tipo de botón.

  // Asigna estilos basados en el prop 'type'.
  switch (type) {
    case 'primary':
      typeStyles = 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600';
      break;
    case 'secondary':
      typeStyles = 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white dark:focus:ring-gray-500';
      break;
    case 'danger':
      typeStyles = 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-600';
      break;
    default:
      typeStyles = 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600';
  }

  return (
    // Renderiza un elemento <button> con los estilos combinados.
    <button
      onClick={onClick} // Asigna la función onClick al evento de clic.
      className={`${baseStyles} ${typeStyles} ${className}`} // Combina estilos base, de tipo y clases adicionales.
      {...props} // Pasa cualquier otra prop directamente al botón.
    >
      {children} {/* Renderiza el contenido hijo dentro del botón. */}
    </button>
  );
}

export default CustomButton; 
