"use client";
import { useState } from "react";
import HeaderMenu from "../header/header";
import HomePage from "./components/pages/home-page/homePage";

export default function MainPage() {
	return (
		<div>
			<HeaderMenu />
			<HomePage />
		</div>
	);
}
