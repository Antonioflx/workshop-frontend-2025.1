"use client";
/*
    Pagina principal
        -> titulo
        -> Escolher o pokemon inicial

    id {
        pikachu: basep-1,
        charmander: det1-4,
        bulbasaur: det1-1

    }
*/

import "./homePage.scss";
import CardsAloneAPI from "./components/cardsAloneAPI/cardsAloneAPI";

export default function HomePage() {
	return (
		<div className="flex items-center justify-center py-4 flex-col">
			<div>
				<h3 className="font-bold">Choose your initial choise! </h3>
			</div>
			<div
				className="py-4 px-4 grid gap-[2rem] grid-cols-2 hover:p-5"
				id="divHas-cardsAlone"
			>
				<div
					id="pikachu"
					className="cardAlone rounded-lg bg-gradient-to-b from-blue-500 to-yellow-300 "
				>
					<CardsAloneAPI nomePokemon={"Pikachu"} />
				</div>
				<div
					id="Charmander"
					className="cardAlone rounded-md bg-gradient-to-b from-blue-500 to-red-600"
				>
					<CardsAloneAPI nomePokemon={"Charmander"} />
				</div>
				<div
					id="Bulbasaur"
					className="cardAlone rounded-md bg-gradient-to-b from-blue-500 to-lime-300"
				>
					<CardsAloneAPI nomePokemon={"Bulbasaur"} />
				</div>
				<div
					id="Squirtle"
					className="cardAlone rounded-md bg-gradient-to-b from-blue-500 to-cyan-300"
				>
					<CardsAloneAPI nomePokemon={"Squirtle"} />
				</div>
			</div>
		</div>
	);
}
