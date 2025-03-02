"use client";
import "./headerStyle.scss";

import { useEffect, useState } from "react";
import FirstMenu from "./components/firstMenu/firstMenu";
import SecondMenu from "./components/secondMenu/secondMenu";

export default function HeaderMenu() {
	// esse window as vezes funciona outras n.
	const [chooseMenu, setChooseMenu] = useState(
		typeof window !== "undefined" ? window.innerWidth < 900 : false
	);
	const [mounted, setMounted] = useState(false);

	// fazer uma função que pegue o tamanho da tela. < 900 px ? FirstMenu : SecondMenu

	useEffect(() => {
		const takeResize = () => {
			setChooseMenu(window.innerWidth < 900 ? true : false);
		};
		setMounted(true);
		takeResize();
		window.addEventListener("resize", takeResize);

		return () => window.removeEventListener("resize", takeResize);
	}, []);

	// o window bugado -> quando recarrega a aparece as opções.
	// Pesquisar melhor qual opção fazer futuramente.
	if (!mounted) {
		return null;
	}

	return (
		<div className="flex justify-end px-3 py-1" id="header-menus">
			{chooseMenu ? <FirstMenu /> : <SecondMenu />}
		</div>
	);
}
