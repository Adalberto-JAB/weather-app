import { NotificationContext } from '../context/NotificationContext';

// Componente Proveedor de Notificaciones.
export const NotificationProvider = ({ children }) => {
  // Función para mostrar una notificación.
  const showNotification = (message, type = 'info') => {
    console.log(`Notificación (${type}): ${message}`);
  };

  // El valor provisto por el contexto.
  const value = {
    showNotification,
  };

  return (
    // Provee el contexto de notificaciones a los componentes hijos.
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
