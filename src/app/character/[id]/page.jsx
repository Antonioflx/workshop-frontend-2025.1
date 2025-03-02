"use client";

import HeaderMenu from "@/components/header/header";
import Page_PokemonAlone from "@/components/main/components/pages/home-page/components/cardsAloneAPI/pages/cardPokemonAlone";
import { use } from "react";

export default function PokemonAlone({ params }) {
	const { id } = use(params);

	{
		/* 
        cardPokemonAlone.jsx -> id = nome. "Pikachu, etc."
        
    */
	}
	console.log(id);
	return (
		<div>
			<HeaderMenu />
			<Page_PokemonAlone id={id} />
		</div>
	);
}
