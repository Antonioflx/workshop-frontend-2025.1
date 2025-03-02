"use client";

import { Spin } from "antd";
import { useEffect, useState } from "react";
import "./cardsAPI.scss";
import PokemonCard from "./CardsPokemon/cardsPokemon";

// pensando em usar como createContext

export default function TakeCardsAPI() {
	const [infoCards, setInfoCards] = useState([]);
	const [pending, setPeding] = useState(true);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const takeCards = async () => {
			setPeding(true);
			try {
				const responseAPI = await fetch(
					"https://api.pokemontcg.io/v2/cards"
				);

				const data = await responseAPI.json();
				// console.log(data);

				setInfoCards(data?.data || []);
			} catch (error) {
				console.log(error);
				setPeding(false);
			} finally {
				setPeding(false);
			}
		};

		takeCards();
	}, []);

	const filterData = infoCards.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div id="divHas-allCards">
			{pending ? (
				<div className="flex items-center h-[60vh] justify-center gap-3">
					<Spin className="spin" size="large" />
					<span className="font-bold"> Loading ....</span>
				</div>
			) : infoCards.length > 0 ? (
				<div>
					<div className="flex flex-col justify-center items-center py-3 gap-2 px-3">
						<h1 className="font-bold text-2xl text-white text-center">
							{" "}
							Procure o seu pokemon!{" "}
						</h1>
						<input
							type="text"
							name="filterPokemon"
							id="filter-pokemon"
							placeholder="Digite o nome do Pokemon"
							className="w-60 h-9 px-2 rounded-2xl bg-gray-200 inpt-filter"
							onChange={(evt) => setSearch(evt.target.value)}
						/>
					</div>
					<div id="divHas-cards">
						{filterData.map((pokemon) => (
							<PokemonCard key={pokemon?.id} pokemon={pokemon} />
						))}
					</div>

					{/*
						Nao consegui mostrar o erro
						
					*/}
				</div>
			) : (
				<h2> No Pokemon </h2>
			)}
		</div>
	);
}
