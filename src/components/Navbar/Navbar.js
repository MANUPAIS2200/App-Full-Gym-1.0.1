import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

import log from "../../log.png";

function NavigationBar() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="navBar"
		>
			<Container>
				<Navbar.Brand>
					<NavLink to={"/"}>
						<img className="logo" src={log} alt="logo"></img>
					</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="tog" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto containerNav">
						<NavLink className="palabras" to={"/Clases"}>
							CLASES
						</NavLink>

						<NavLink className="palabras" to={"/Salas"}>
							ZONAS
						</NavLink>

						<NavLink className="palabras" to={"/servicios"}>
							SERVICIOS
						</NavLink>

						<NavLink className="palabras" to={"/Nosotros"}>
							NOSOTROS
						</NavLink>

						<NavLink className="palabras" to={"/Contacto"}>
							CONTACTO
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
