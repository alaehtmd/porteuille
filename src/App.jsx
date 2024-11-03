import './App.css';
import '../src/compo/responsif.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './compo/Home';
import About from './compo/About';
import Navbar from './compo/nav';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;