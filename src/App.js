import './App.css';
import {  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from './pages/MainPage'
import About from './pages/About.js'
import Settings from './pages/Settings.js'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rosetinted" element={<MainPage />} />
        <Route path="/rosetinted/about" element={<About />} />
        <Route path="/rosetinted/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;