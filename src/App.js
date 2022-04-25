import './App.css';
import {  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MainPage from './pages/MainPage'
import About from './pages/About.js'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rosetinted/about" element={<About />} />
        <Route path="/rosetinted" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;