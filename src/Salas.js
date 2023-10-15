import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ListOptions from './components/ListOptions/ListOptions';
import OptionDetail from './components/OptionDetail/OptionDetail';
import Portada from './components/Portada/Portada';
import Frases from './components/Frases/Frases';
import WhatsappLink from './components/WhatsappLink/WhatsappLink';
import Footer from './components/Footer/Footer';
import EmblaCarousel from './components/Carrusel/EmblaCarousel';
import HomeNuestrasClases from './components/Home-NuestrasClases/Home-NuestrasClases';
import HomeZonas from './components/Home-Zonas/Home-Zonas';

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Salas() {
  return (
    <div className="App">
     <p>Hola</p>
    </div>
  );
}

export default Salas;
