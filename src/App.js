import './App.css';
import { Routes, Route } from 'react-router-dom'
import Worldmap from './Components/WorldMap/Worldmap';
import Navigation from './Components/Navbar/Navbar';
import UnionMap from './Components/UnionMap/UnionMap';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={
        <Navigation />
        } />
      <Route path="/map" element={<Worldmap />} />
      <Route path="/union" element={<UnionMap />} />
    </Routes>
    </div>
  );
}

export default App;
