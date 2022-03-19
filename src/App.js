import logo from './logo.svg';
import './App.css';
import {  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Landing from './pages/Landing.js'
import Grid from './pages/Grid.js'
import Graphics from './pages/Graphics.js'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/graphics" element={<Graphics />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
