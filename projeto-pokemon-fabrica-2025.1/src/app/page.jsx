"use client";

import TakeCardsAPI from "@/components/main/components/cardsAPI/cards";

import MainPage from "@/components/main/main";

export default function App() {
	return (
		<div id="container-principal">
			{/* <TakeCardsAPI /> API */}
			<MainPage />
			{/* Nao consegui da o efeito de blur -> voltar futuramente
				<div className="blur-whenOpenMenu"></div> 
			*/}
		</div>
	);
}
