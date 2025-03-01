"use client";

import { useEffect, useState } from "react";
// pensando em usar como createContext

export default function TakeCardsAPI() {
	const [infoCards, setInfoCards] = useState([]);
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

	return (
		<div id="cards">
			<h1> All Pokemons </h1>

			{pending ? (
				"Carregando..."
			) : infoCards.length > 0 ? (
				infoCards.map((item, index) => (
					<div key={item?.id}>
						<p>{item?.name}</p>
					</div>
				))
			) : (
				<h2> No Pokemon </h2>
			)}
		</div>
	);
}
