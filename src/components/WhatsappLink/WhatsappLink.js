import {FaWhatsapp} from "react-icons/fa";
import "./WhatsappLink.css";

const WhatsappLink = () => {
	const message = "Hola, estoy estoy escribiendo desde la landing =)";
	const phone = "+5491165188743";

	return (
		<a
			href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="WhatsappLink"
		>
			<FaWhatsapp />
		</a>
	);
};

export default WhatsappLink;
