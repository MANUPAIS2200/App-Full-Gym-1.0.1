import React from "react";
import EmblaCarousel from "./EmblaCarousel"

//const SLIDE_COUNT = 5;
//const slides = Array.from(Array(SLIDE_COUNT).keys());

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Salas() {
	return (
		<div className="App">
			<p className="txt">Salas</p>
			<EmblaCarousel slides={slides} />
		</div>
	);
}

export default Salas;
