import { useEffect } from 'react'; 
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; // Importa componentes de react-leaflet.
import L from 'leaflet'; // Importa la librería Leaflet para configuraciones avanzadas.

// Esto asegura que los iconos se carguen desde un CDN.
delete L.Icon.Default.prototype._getIconUrl; 

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // URL para icono de alta resolución.
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',         // URL para icono de resolución normal.
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',     // URL para la sombra del icono.
});

// Componente auxiliar para cambiar la vista del mapa dinámicamente.
// 'useMap' solo puede usarse dentro de MapContainer.
const ChangeMapView = ({ center, zoom }) => {
  const map = useMap(); // Obtiene la instancia del mapa de Leaflet.
  useEffect(() => {
    map.setView(center, zoom); // Cambia el centro y el zoom del mapa.
  }, [center, zoom, map]); // Se re-ejecuta cuando 'center', 'zoom' o 'map' cambian.
  return null; // Este componente no renderiza nada visualmente.
}

const WeatherMap = ({ latitude, longitude, cityName }) => {
  // Coordenadas predeterminadas (centro del mundo) y zoom inicial si no hay datos de ciudad.
  const defaultPosition = [0, 0];
  const defaultZoom = 2;

  // Determina la posición y el zoom del mapa. Si hay latitud y longitud, usa las de la ciudad; de lo contrario, usa las predeterminadas.
  const position = (latitude && longitude) ? [latitude, longitude] : defaultPosition;
  const zoom = (latitude && longitude) ? 10 : defaultZoom; // Zoom más cercano (10) si hay ciudad, o el predeterminado (2).

  return (
    // Contenedor del mapa con estilos para tamaño y apariencia.
    <div className="w-full h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg my-6 z-10" style={{ height: '400px', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      {/* Componente MapContainer de react-leaflet. */}
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className="w-full h-full">
        {/* Componente auxiliar para actualizar la vista del mapa. */}
        <ChangeMapView center={position} zoom={zoom} />

        {/* Capa de azulejos del mapa (OpenStreetMap). */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Muestra un marcador solo si hay coordenadas de ciudad. */}
        {(latitude && longitude) && (
          <Marker position={position}>
            {/* Popup que se muestra al hacer clic en el marcador. */}
            <Popup>
              <b>{cityName}</b> <br /> Lat: {latitude.toFixed(2)}, Lon: {longitude.toFixed(2)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default WeatherMap; 
