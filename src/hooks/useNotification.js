import { useContext } from 'react'; 
import { NotificationContext } from '../context/NotificationContext'; 

// Hook personalizado para consumir el contexto de notificaciones.
export const useNotification = () => {
  // Intenta obtener el valor del NotificationContext.
  const context = useContext(NotificationContext);
  // Si el contexto no ha sido provisto, lanza un error.
  if (context === undefined) {
    throw new Error('useNotification debe ser usado dentro de un NotificationProvider');
  }
  return context; // Retorna el valor del contexto.
};
