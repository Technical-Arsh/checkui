import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game1 from './Components/Pages/Game1/game1.js'
import Game2 from './Components/Pages/Game2/game2.js'
import Game3 from './Components/Pages/Game3/game3.js'
import Game4 from './Components/Pages/Game4/game4.js'
import Game5 from './Components/Pages/Game5/game5.js'
import Game6 from './Components/Pages/Game6/game6.js'
function App() {
  return (
  
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/game3" element={<Game3 />} />
          <Route path="/game4" element={<Game4 />} />
          <Route path="/game5" element={<Game5 />} />
          <Route path="/game6" element={<Game6 />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
