import Pikachu from "./pikachu.png";

export default function ImgPikachu() {
	return (
		<img
			src={Pikachu.src}
			alt="imagem do pikachu"
			className="w-16 h-16"
		/>
	);
}
