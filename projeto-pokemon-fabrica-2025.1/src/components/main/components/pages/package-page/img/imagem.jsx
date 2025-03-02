"use client";

import { ContextAPI } from "@/app/contextAPI";
import { useContext } from "react";
import BehindCard from "./behindCard.jpg";
import Link from "next/link";

const ImgCarrosel = ({ showCards }) => {
	const { infoCards } = useContext(ContextAPI);

	// da para melhorar a logica total aq, mas tenho só ate amanha. Bora ver.

	const randomIndices = {
		indice1: infoCards[Math.floor(Math.random() * 250)],
		indice2: infoCards[Math.floor(Math.random() * 250)],
		indice3: infoCards[Math.floor(Math.random() * 250)],
		indice4: infoCards[Math.floor(Math.random() * 250)],
		indice5: infoCards[Math.floor(Math.random() * 250)],
		indice6: infoCards[Math.floor(Math.random() * 250)],
	};

	/*
		 aqui tá um erro que ao clicar em voltar -> Ele n mantém os dados -> Maybe useMemo() ? 
		 	Mas, n sei usar, ent deixo para o futuro
	*/
	return (
		<div className="flex flex-wrap gap-3 justify-center py-3 divHas-imgs">
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md ">
						{" "}
						{randomIndices.indice1?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice1?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice1.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md ">
						{" "}
						{randomIndices.indice2?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice2?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice2.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md ">
						{" "}
						{randomIndices.indice3?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice3?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice3.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md">
						{" "}
						{randomIndices.indice4?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice4?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice4.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md ">
						{" "}
						{randomIndices.indice5?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice5?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice5.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
			<div className="flex flex-col items-center">
				{showCards && (
					<h2 className="font-bold text-white drop-shadow-md">
						{" "}
						{randomIndices.indice6?.name}{" "}
					</h2>
				)}
				<Link href={`/character/${randomIndices.indice6?.name}`}>
					<img
						src={
							showCards
								? randomIndices.indice6.images.small
								: BehindCard.src
						}
						alt="Imagem"
						className="w-35"
					/>
				</Link>
			</div>
		</div>
	);
};

export default ImgCarrosel;
