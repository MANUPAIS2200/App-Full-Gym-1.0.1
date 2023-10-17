import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import WhatsappLink from "./components/WhatsappLink/WhatsappLink";
import Footer from "./components/Footer/Footer";
import Servicios from "./components/Servicios/Servicios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Salas from "./components/Salas/Salas";
import Clases from "./components/Clases/Clases";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<WhatsappLink />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Salas" element={<Salas />} />
					<Route path="/clases" element={<Clases />} />
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/nosotros" element={<Nosotros />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
