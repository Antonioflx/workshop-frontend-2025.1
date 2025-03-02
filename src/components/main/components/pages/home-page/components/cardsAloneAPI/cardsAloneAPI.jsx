"use client";
import "./cardAlone.scss";
const { useEffect, useState } = require("react");
import { Spin } from "antd";
import Page_PokemonAlone from "./pages/cardPokemonAlone";
import Link from "next/link";
/*
     pegar uma api com o nome do pikachu inicial que o usu escolheu
     https://api.pokemontcg.io/v2/cards?q=name:pikachu
     `https://api.pokemontcg.io/v2/cards?q=name:${nomePokemon}`
*/

const CardsAloneAPI = ({ nomePokemon }) => {
	const [infoCardsAlone, setInfoCardsAlone] = useState(null);

	useEffect(() => {
		const takeAlone_pokemonApi = async () => {
			try {
				const responseAPI = await fetch(
					`https://api.pokemontcg.io/v2/cards?q=name:${nomePokemon}`
				);

				const data = await responseAPI.json();
				// console.log(data);

				setInfoCardsAlone(data?.data[0] || null);
			} catch (error) {
				console.log(error);
			}
		};

		takeAlone_pokemonApi();
	}, [nomePokemon]);

	return (
		<div className="h-full flex justify-center items-center ">
			{infoCardsAlone ? (
				<div
					id="divHas-h2-cardAlone"
					className="flex flex-col items-center px-2 py-2"
				>
					<h2 className="font-bold text-white drop-shadow-md">
						{" "}
						{infoCardsAlone.name}{" "}
					</h2>

					<Link href={`/character/${infoCardsAlone.name}`}>
						<img
							src={infoCardsAlone.images?.large}
							alt={infoCardsAlone.name}
							className="w-[200px] h-[200px] img-cardsAlone"
						/>
					</Link>
				</div>
			) : (
				<Spin size="large" />
			)}
		</div>
	);
};

export default CardsAloneAPI;
