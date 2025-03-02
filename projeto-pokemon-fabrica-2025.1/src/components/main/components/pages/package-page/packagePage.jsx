/*
    Sorteio de pacotes.
*/
import BehindCard from "./img/behindCard.jpg";

import ImgCarrosel from "./img/imagem";

export default function PackagePage() {
	return (
		<div>
			<ImgCarrosel srcImg={BehindCard.src} />
			<div>
				<button>Abrir Pacote</button>
			</div>
		</div>
	);
}
