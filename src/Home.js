import React from "react";

import EmblaCarousel from "./components/Carrusel/EmblaCarousel";
import HomeNuestrasClases from "./components/Home-NuestrasClases/Home-NuestrasClases";
import HomeZonas from "./components/Home-Zonas/Home-Zonas";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Home() {
	return (
		<div className="App">
			<EmblaCarousel slides={slides} />
			<HomeNuestrasClases />
			<HomeZonas />
		</div>
	);
}

export default Home;
