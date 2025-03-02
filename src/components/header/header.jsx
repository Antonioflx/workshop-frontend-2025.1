"use client";
import "./headerStyle.scss";

import { useEffect, useState } from "react";
import FirstMenu from "./components/firstMenu/firstMenu";
import SecondMenu from "./components/secondMenu/secondMenu";

export default function HeaderMenu() {
	// esse window as vezes funciona outras n.
	const [chooseMenu, setChooseMenu] = useState(false);

	// fazer uma função que pegue o tamanho da tela. < 900 px ? FirstMenu : SecondMenu

	useEffect(() => {
		const takeResize = () => {
			setChooseMenu(window.innerWidth < 900 ? true : false);
		};

		window.addEventListener("resize", takeResize);

		return () => window.removeEventListener("resize", takeResize);
	}, []);

	return (
		<div className="flex justify-end px-3 py-2" id="header-menus">
			{chooseMenu ? <FirstMenu /> : <SecondMenu />}
		</div>
	);
}
