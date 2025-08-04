# **☁️ App del Clima Interactiva y Persistente ☀️**

## **🚀 Introducción**

Bienvenido a la **App del Clima Interactiva y Persistente**, una moderna aplicación web desarrollada con React y Vite que te permite obtener información meteorológica detallada de cualquier ciudad del mundo. Diseñada con una experiencia de usuario intuitiva y un enfoque en la persistencia de datos, esta aplicación es tu compañera ideal para mantenerte informado sobre el clima.

Explora el clima actual, consulta pronósticos de 5 días, gestiona tus ciudades favoritas y visualiza su ubicación en un mapa interactivo, todo ello con un diseño responsivo y personalizable.

## **✨ Características Principales**

* **Búsqueda Inteligente de Ciudades:**  
  * Campo de búsqueda intuitivo para encontrar ciudades por nombre.  
  * Manejo de **múltiples coincidencias** de ciudades, presentando una lista para que el usuario seleccione la ubicación exacta.  
  * Notificaciones claras para búsquedas exitosas, errores o ciudades no encontradas.  
* **Clima Actual Detallado:**  
  * Visualización clara de la temperatura actual (en Celsius), descripción del clima e icono representativo.  
  * Información adicional como sensación térmica, humedad y velocidad del viento.  
  * Muestra el nombre de la ciudad, estado (si aplica) y país.  
* **Pronóstico Extendido:**  
  * Pronóstico del tiempo para los **próximos 5 días**, mostrando temperaturas máximas y mínimas, descripción e icono para cada día.  
* **Gestión de Favoritos Persistente:**  
  * Añade o elimina ciudades a tu lista de favoritos con un solo clic.  
  * Acceso a una **lista de favoritos en un modal dedicado**, permitiendo ver el clima de una ciudad favorita o eliminarla.  
  * La lista de favoritos se **guarda automáticamente en tu navegador** (localStorage) para que no los pierdas al recargar.  
* **Visualización en Mapa Interactivo:**  
  * Un mapa dinámico (integrado con Leaflet) que muestra la ubicación de la ciudad consultada con un marcador preciso.  
* **Alternancia de Tema (Claro/Oscuro):**  
  * Cambia fácilmente entre un tema claro y un tema oscuro para una experiencia visual adaptada a tus preferencias.  
  * Tu preferencia de tema también se **guarda en localStorage**.  
* **Notificaciones Amigables:**  
  * Integración con react-toastify para ofrecer retroalimentación visual sobre las operaciones (cargas, errores, favoritos).  
* **Indicadores de Carga:**  
  * Un spinner visual que te informa cuando la aplicación está obteniendo datos del clima.

## **📸 Demostración Visual**

Aquí puedes ver la aplicación en acción:

\<\!-- Puedes reemplazar estos placeholders con GIFs o capturas de pantalla reales de tu aplicación. \--\>

**Búsqueda y Visualización del Clima:**

*(Captura de pantalla o GIF mostrando la búsqueda de una ciudad y la visualización de su clima y pronóstico.)*

**Múltiples Coincidencias y Selección:**

*(Captura de pantalla o GIF mostrando el modal de selección de ciudad cuando hay múltiples resultados.)*

**Gestión de Favoritos:**

*(Captura de pantalla o GIF mostrando cómo añadir/eliminar favoritos y el modal de favoritos.)*

**Mapa Interactivo:**

*(Captura de pantalla mostrando el mapa con el marcador de la ciudad.)*

**Alternancia de Tema:**

*(Captura de pantalla o GIF mostrando el cambio entre el tema claro y oscuro.)*

## **🛠️ Tecnologías Utilizadas**

* **Frontend:**  
  * [**React**](https://react.dev/) \- Librería de JavaScript para construir interfaces de usuario.  
  * [**Vite**](https://vitejs.dev/) \- Herramienta de construcción rápida para proyectos web.  
  * [**Tailwind CSS**](https://tailwindcss.com/) \- Framework CSS para un diseño rápido y responsivo.  
  * [**react-icons**](https://react-icons.github.io/react-icons/) \- Colección de iconos populares para React (incluye Weather Icons y Font Awesome).  
  * [**react-toastify**](https://fkhadra.github.io/react-toastify/) \- Librería para notificaciones toast.  
  * [**react-leaflet**](https://react-leaflet.js.org/) / [**Leaflet**](https://leafletjs.com/) \- Para mapas interactivos.  
* **API Externa:**  
  * [**OpenWeatherMap API**](https://openweathermap.org/api) \- Fuente de datos meteorológicos y geocodificación.

## **⚙️ Instalación y Configuración Local**

Sigue estos pasos para tener una copia del proyecto funcionando en tu máquina local para desarrollo y pruebas.

### **Requisitos Previos**

Asegúrate de tener instalado lo siguiente:

* [Node.js](https://nodejs.org/en/) (versión 18 o superior recomendada)  
* [npm](https://www.npmjs.com/) (viene con Node.js)

### **1\. Clonar el Repositorio**

git clone https://github.com/tu\_usuario/tu\_repositorio.git  
cd tu\_repositorio

### **2\. Instalar Dependencias**

npm install

### **3\. Configurar Variables de Entorno (API Key)**

Necesitarás una API Key de OpenWeatherMap.

1. Regístrate o inicia sesión en [OpenWeatherMap](https://home.openweathermap.org/api_keys) para obtener tu clave API.  
2. Crea un archivo llamado .env.local en la **raíz de tu proyecto** (al mismo nivel que package.json).  
3. Añade tu API Key a este archivo de la siguiente manera:  
   VITE\_OPENWEATHER\_API\_KEY=tu\_api\_key\_aqui

   **¡Importante\!** Reemplaza tu\_api\_key\_aqui con tu clave API real. Este archivo .env.local no debe ser subido a tu repositorio público.

### **4\. Ejecutar la Aplicación**

npm run dev

La aplicación se abrirá en tu navegador en http://localhost:5173/ (o un puerto similar).

## **💡 Uso de la Aplicación**

1. **Buscar Clima:** Escribe el nombre de una ciudad en el campo de búsqueda y haz clic en "Buscar Clima".  
   * Si hay una sola coincidencia, verás el clima directamente.  
   * Si hay múltiples, aparecerá un modal para que selecciones la ciudad deseada.  
2. **Agregar/Eliminar Favoritos:** Haz clic en el icono de corazón en la tarjeta de clima para añadir o quitar una ciudad de tus favoritos.  
3. **Ver Favoritos:** Haz clic en el botón "Mis Favoritos" para abrir el modal con tu lista. Desde allí, puedes hacer clic en una ciudad para ver su clima o en el icono de papelera para eliminarla.  
4. **Cambiar Tema:** Usa el botón "Tema Oscuro" / "Tema Claro" para alternar la apariencia de la aplicación.

## **📂 Estructura del Proyecto**

El proyecto está organizado de manera modular para facilitar el desarrollo y mantenimiento:

weather-app/  
├── public/                  \# Archivos estáticos (HTML, imágenes, etc.)  
├── src/  
│   ├── assets/              \# Activos como imágenes, fuentes (si aplica)  
│   ├── components/          \# Componentes reutilizables de UI (botones, tarjetas, modales)  
│   │   ├── CityCard.jsx  
│   │   ├── CitySelectionModal.jsx  
│   │   ├── CustomButton.jsx  
│   │   ├── FavoritesList.jsx  
│   │   ├── FavoritesModal.jsx  
│   │   ├── FloatingLegend.jsx  
│   │   ├── ForecastCard.jsx  
│   │   ├── Loader.jsx  
│   │   ├── SearchForm.jsx  
│   │   ├── ThemeToggle.jsx  
│   │   └── WeatherMap.jsx  
│   ├── context/             \# Definiciones de Contextos de React  
│   │   ├── NotificationContext.jsx  
│   │   ├── ThemeContext.jsx  
│   │   └── WeatherContext.jsx  
│   ├── hooks/               \# Hooks personalizados de React  
│   │   ├── useLocalStorage.jsx  
│   │   ├── useNotification.js  
│   │   └── useTheme.js  
│   ├── providers/           \# Componentes Proveedores de Contexto  
│   │   ├── NotificationProvider.jsx  
│   │   ├── ThemeProvider.jsx  
│   │   └── WeatherProvider.jsx  
│   ├── services/            \# Lógica de interacción con APIs y almacenamiento  
│   │   ├── localStorageService.js  
│   │   └── weatherService.js  
│   ├── utils/               \# Funciones de utilidad (ej. conversión de unidades)  
│   │   └── weatherUtils.js  
│   ├── App.jsx              \# Componente raíz de la aplicación  
│   ├── main.jsx             \# Punto de entrada de la aplicación  
│   └── index.css            \# Estilos CSS globales y de Tailwind  
├── .env.local               \# Variables de entorno (NO SUBIR A GIT)  
├── package.json             \# Dependencias y scripts del proyecto  
├── tailwind.config.js       \# Configuración de Tailwind CSS  
├── vite.config.js           \# Configuración de Vite  
└── README.md                \# Este archivo

## **🔮 Mejoras Futuras (Ideas)**

* **Geolocalización:** Opción para detectar la ubicación actual del usuario y mostrar su clima automáticamente.  
* **Pronóstico por Horas:** Implementar un pronóstico más detallado por horas para el día actual o siguiente.  
* **Unidades de Medida:** Permitir al usuario alternar entre Celsius, Fahrenheit y Kelvin.  
* **Historial de Búsquedas:** Mantener un historial de las últimas ciudades buscadas.  
* **Gráficos:** Visualizar tendencias de temperatura o precipitación con gráficos interactivos.  
* **Alertas Meteorológicas:** Integrar la API de alertas de OpenWeatherMap.  
* **Internacionalización (i18n):** Soporte para múltiples idiomas.  
* **Pruebas Unitarias/Integración:** Añadir tests para asegurar la robustez del código.

## **🤝 Contribución**

¡Las contribuciones son bienvenidas\! Si deseas mejorar esta aplicación, por favor:

1. Haz un "fork" del repositorio.  
2. Crea una nueva rama (git checkout \-b feature/nueva-funcionalidad).  
3. Realiza tus cambios y commitea (git commit \-m 'feat: añade nueva funcionalidad X').  
4. Haz "push" a la rama (git push origin feature/nueva-funcionalidad).  
5. Abre un Pull Request.

## **📄 Licencia**

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](https://www.google.com/search?q=LICENSE) para más detalles.

## **✉️ Contacto**

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

* **Tu Nombre/Alias:** \[Tu Nombre o Alias\]  
* **GitHub:** [@tu\_usuario](https://www.google.com/search?q=https://github.com/tu_usuario)  
* **LinkedIn:** \[Tu Perfil de LinkedIn (opcional)\]

¡Gracias por revisar este proyecto\!