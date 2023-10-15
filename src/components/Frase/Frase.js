import {useSpring, animated} from "react-spring";

export default function Frase({texto, from, to}) {
	const springs = useSpring({
		from: {x: from},
		to: {x: to},
	});

	return (
		<animated.div
			style={{
				...springs,
			}}
		>
			<p className="frase">{texto}</p>
		</animated.div>
	);
}
