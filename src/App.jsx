import { ThemeProvider } from "./providers/ThemeProvider"; 
import { NotificationProvider } from "./providers/NotificationProvider"; 
import { WeatherProvider } from "./providers/WeatherProvider"; 

import HomePage from "./pages/homePage";

const App = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <WeatherProvider>
          <HomePage />
        </WeatherProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App; 

