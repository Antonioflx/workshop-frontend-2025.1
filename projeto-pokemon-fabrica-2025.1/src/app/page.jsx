"use client";

import TakeCardsAPI from "@/components/main/components/cardsAPI/cards";
import HeaderMenu from "@/components/header/header";

export default function App() {
	return (
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		// 	<h1>My Project</h1>
		// </div>
		<div id="container-principal">
			{/* <TakeCardsAPI /> API */}
			<HeaderMenu />
		</div>
	);
}
