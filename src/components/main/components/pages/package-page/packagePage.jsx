"use client";
/*
    Sorteio de pacotes.
*/
import { useContext, useEffect, useState } from "react";
import ImgCarrosel from "./img/imagem";

import "./packagePage.scss";
import { ContextAPI } from "@/components/contextAPI";
import { Spin } from "antd";

export default function PackagePage() {
	const [showCards, setShowCards] = useState(false);
	const { infoCards } = useContext(ContextAPI);

	if (!infoCards || infoCards.length === 0) {
		return (
			<div className="flex items-center h-[60vh] justify-center gap-3">
				<Spin className="spin" size="large" />
				<span className="font-bold"> Loading ....</span>
			</div>
		);
	}
	const handleCaminhoImg = () => setShowCards(!showCards);

	return (
		<div id="divHas-cards-and-btn">
			<ImgCarrosel showCards={showCards} data={infoCards} />
			<div className="flex justify-center  ">
				<button
					type="button"
					className="bg-blue-600 w-40 rounded-lg h-10 hover:bg-blue-500 cursor-pointer text-white"
					onClick={handleCaminhoImg}
				>
					{!showCards ? "Abir Pacote" : "Resetar Pacote"}
				</button>
			</div>
		</div>
	);
}
