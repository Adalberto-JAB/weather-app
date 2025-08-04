import { useState } from 'react'; // Importa el hook useState.
import { useWeather } from '../hooks/useWeather'; // Importa el hook useWeather para acceder al contexto del clima.
import CustomButton from './CustomButton'; // Importa un componente de botón personalizado.
import { Trash, HeartFill, XCircleFill } from 'react-bootstrap-icons'; // Importa iconos de react-bootstrap-icons.

const FavoritesModal = () => {
  // Estado local para controlar la visibilidad del modal.
  const [isOpen, setIsOpen] = useState(false);
  // Obtiene los favoritos, y las funciones para eliminar y buscar el clima de favoritos del contexto.
  const { favorites, removeFavorite, fetchFavoriteWeather } = useWeather();

  // Función para manejar el clic en una ciudad favorita, buscando su clima y cerrando el modal.
  const handleCityClick = (favCity) => { // Ahora recibe el objeto completo de la ciudad.
    const coordFavCity = {lon: favCity.coord.lon, lat: favCity.coord.lat};
    fetchFavoriteWeather(coordFavCity); // Llama a fetchFavoriteWeather con el objeto de la ciudad.
    setIsOpen(false); // Cierra el modal después de seleccionar.
  };

  return (
    <>
      {/* Botón para abrir el modal de favoritos. */}
      <CustomButton onClick={() => setIsOpen(true)} type="primary" className="mb-8 w-full max-w-xs">
        <HeartFill className="inline-block mr-2" /> Mis Favoritas ({favorites.length}) {/* Muestra el contador de favoritos. */}
      </CustomButton>

      {/* Renderiza el modal solo si 'isOpen' es true. */}
      {isOpen && (
        // Overlay del modal para oscurecer el fondo.
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-35 p-4">
          <div>
          <div>
            {/* Botón para cerrar el modal. */}
            <CustomButton
              onClick={() => setIsOpen(false)}
              type="danger"
              className="absolute top-4 right-4 p-2 rounded-full"
            >
              <XCircleFill className="text-xl sm:text-2xl" /> {/* Icono de cierre. */}
            </CustomButton>
            {/* Título del modal. */}
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 text-center">Mis Ciudades Favoritas</h2>
          </div>
          {/* Contenido del modal. */}
          <div className="bg-bg-secondary rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[75vh] overflow-y-auto border border-border-color relative">
            

            {/* Muestra un mensaje si no hay ciudades favoritas. */}
            {favorites.length === 0 ? (
              <p className="text-text-jab text-center py-8">No tienes ciudades favoritas aún.</p>
            ) : (
              // Si hay favoritos, los lista en una cuadrícula.
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {favorites.map((favCity) => (
                  // Cada tarjeta de ciudad favorita.
                  <div
                    key={favCity.id} // Clave única para cada elemento de la lista.
                    className="bg-bg-primary p-4 rounded-lg shadow-md flex items-center justify-between border border-border-color"
                  >
                    {/* Área clicable para ver el clima de la ciudad. */}
                    <div className="flex-grow cursor-pointer" onClick={() => handleCityClick(favCity)}>
                      <h3 className="text-xl font-bold text-text-primary">{favCity.name}</h3> {/* Nombre de la ciudad. */}
                      {/* Muestra el estado y país si están disponibles. */}
                      {favCity.state && <p className="text-text-jab text-sm">{favCity.state}, {favCity.country}</p>}
                      {!favCity.state && <p className="text-text-jab text-sm">{favCity.country}</p>}
                    </div>
                    {/* Botón para eliminar la ciudad de favoritos. */}
                    <CustomButton
                      onClick={() => removeFavorite(favCity.id)} // Llama a removeFavorite con el ID de la ciudad.
                      type="danger"
                      className="ml-4 p-2 rounded-full"
                    >
                      <Trash className="text-lg" /> {/* Icono de papelera. */}
                    </CustomButton>
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesModal; // Exporta el componente FavoritesModal.
