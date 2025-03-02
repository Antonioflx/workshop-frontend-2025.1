"use client";
/*
    Menu de telas grandes.

    width > 900px

    nav 
        -> Home
        -> Cards
        -> Carrosel / Pacotes
*/

import ImgPikachu from "../img/imgPikachu";
import LinkMenu from "../linkMenu/linkMenu";

export default function SecondMenu() {
	return (
		<div className="flex w-screen justify-between">
			<ImgPikachu />
			<LinkMenu />
		</div>
	);
}
