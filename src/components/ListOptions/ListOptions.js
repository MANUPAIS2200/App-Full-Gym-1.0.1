import OptionsCards from "../OptionsCards/OptionsCards";
import "./ListOptions.css";

const ListOptions = () => {
	return (
		<div>
			<div className="contenedor">
				<div className="subtituloPrototipos">
					<h2>Prototipo App mobile</h2>
					<h2>Prototipo App web</h2>
				</div>

				<div>
					<OptionsCards />
				</div>
			</div>
		</div>
	);
};

export default ListOptions;
