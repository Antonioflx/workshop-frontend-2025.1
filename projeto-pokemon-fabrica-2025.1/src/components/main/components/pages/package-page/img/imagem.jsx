"use client";

const ImgCarrosel = ({ srcImg }) => {
	return (
		<div className="flex flex-wrap gap-6 justify-center py-3">
			<img src={srcImg} alt="Imagem" className="w-35" />
			<img src={srcImg} alt="Imagem" className="w-35" />
			<img src={srcImg} alt="Imagem" className="w-35" />
			<img src={srcImg} alt="Imagem" className="w-35" />
			<img src={srcImg} alt="Imagem" className="w-35" />
			<img src={srcImg} alt="Imagem" className="w-35" />
		</div>
	);
};

export default ImgCarrosel;
