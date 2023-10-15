import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListOptions from './components/ListOptions/ListOptions';
import OptionDetail from './components/OptionDetail/OptionDetail';
import Navbar from './components/Navbar/Navbar';
import Portada from './components/Portada/Portada';
import Frases from './components/Frases/Frases';
import WhatsappLink from './components/WhatsappLink/WhatsappLink';
import Footer from './components/Footer/Footer';
import EmblaCarousel from './components/Carrusel/EmblaCarousel';
import HomeNuestrasClases from './components/Home-NuestrasClases/Home-NuestrasClases';
import HomeZonas from './components/Home-Zonas/Home-Zonas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Salas from './Salas';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
		<WhatsappLink/>
		
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salas" element={<Salas />} />
        </Routes>
		<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
