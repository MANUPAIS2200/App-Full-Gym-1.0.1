import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import {FaInstagram, FaWhatsapp, FaTiktok} from "react-icons/fa";
import {CgGym} from "react-icons/cg";
import {NavLink} from "react-router-dom";

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
					<CgGym className="logo" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="tog" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<span className="palabras">
							<NavLink to={"/"}>HOME</NavLink>
						</span>
						<span className="palabras">
							<NavLink to={"/Clases"}>Clases</NavLink>
						</span>
						<span className="palabras">
							<NavLink to={"/Salas"}>Salas</NavLink>
						</span>
						<span className="palabras">
							<NavLink to={"/servicios"}>Servicios</NavLink>
						</span>
						<span className="palabras">
							<NavLink to={"/Nosotros"}>Nosotros</NavLink>
						</span>
						<span className="palabras">
							<NavLink to={"/Contacto"}>Contacto</NavLink>
						</span>
					</Nav>
					<Nav>
						<div className="links">
							<Nav.Link>
								<FaInstagram />
							</Nav.Link>

							<a
								href="https://wa.me/5491165188743?text=Hola,%20estoy%20interesado%20en%20su%20servicio"
								target="_blank"
								rel="noopener noreferrer"
								className="wasapNav"
							>
								<FaWhatsapp />
							</a>

							<Nav.Link>
								<FaTiktok />
							</Nav.Link>
						</div>
						{/**
            <Nav.Link>
              <Button variant="dark">Registrate</Button>
            </Nav.Link>
            */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
