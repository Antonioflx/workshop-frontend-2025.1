"use client";

import { createContext, useState, useEffect } from "react";

export const ContextAPI = createContext(null);

export default function GlobalStateAPI({ children }) {
	const [infoCards, setInfoCards] = useState([]);
	const [search, setSearch] = useState("");
	const [pending, setPeding] = useState(true);

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
		<ContextAPI.Provider
			value={{ infoCards, search, setSearch, filterData, pending }}
		>
			{children}
		</ContextAPI.Provider>
	);
}
