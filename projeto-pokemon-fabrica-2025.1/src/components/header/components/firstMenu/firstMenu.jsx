"use client";
/*
    Menu tela pequena
    320px -- 900px

    Hamburuger 
        -> OnClick 
            -> show div
                -> Home
                -> Cards
                -> Pacotes / Carrosel
*/

import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "../../headerStyle.scss";
import styles from "./firstMenu.module.scss";
import ShowMenu from "./showMenu";
import ImgPikachu from "../img/imgPikachu";

export default function FirstMenu() {
	const [showHamburguer, setShowHamburguer] = useState(true);

	/*
		Usu clicou no hamburguer ---
			-> menuHamburguer --- desaparece
			-> div faz a transition da esquerda para a direita com os links
			-> a div contém os menus <Link /> e icon de close.

		Usu clicou no icon-close
			-> div faz a transition da direita para a esquerda
			-> menuHamburguer --- aparece
	*/

	const show_and_closeMenu = () => {
		setShowHamburguer(!showHamburguer);
	};

	return (
		<div
			className="flex  px-3 py-2 w-screen justify-between"
			id="divHas-menuHeader"
		>
			<ImgPikachu />
			<div>
				<nav className="text-gray-100 py-1 px-1">
					{showHamburguer ? (
						<MdMenu
							className="text-2xl text-black"
							id="menu-hamburguer"
							onClick={show_and_closeMenu}
						/>
					) : (
						<ShowMenu
							tema={
								!showHamburguer
									? styles.showSencodMenu
									: styles.closeSecondMenu
							}
							onClick={show_and_closeMenu}
						/>
					)}
				</nav>
			</div>
		</div>
	);
}
