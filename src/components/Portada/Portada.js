import "./Portada.css";
import Button from "react-bootstrap/Button";

const Portada = () => {
	return (
		<div className="portada">
			<div className="cuadroPpal">
				<h1 className="titulo">App Full Gym</h1>
				<h2 className="subtitulo">Gimnasios + Personal Trainers</h2>
			</div>
			<div>
				<Button variant="dark" className="btnPersonaliza">
					Personalizá tu App
				</Button>
				<p className="prueba">Obtené 30 días de prueba!</p>
			</div>
		</div>
	);
};

export default Portada;
