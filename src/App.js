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
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;