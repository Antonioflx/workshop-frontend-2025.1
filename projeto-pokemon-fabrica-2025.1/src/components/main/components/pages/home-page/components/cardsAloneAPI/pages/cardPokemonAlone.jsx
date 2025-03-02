/*
    Voltar aqui dps
*/

import { useEffect, useState } from "react";
import "./cardsAlone.scss";
import { Spin } from "antd";

export default function Page_PokemonAlone({ id }) {
	const [allInfo, setAllInfo] = useState();
	const [pending, setPending] = useState(true);

	useEffect(() => {
		const takeAPI_Id = async () => {
			setPending(true);
			try {
				const responseAPI = await fetch(
					`https://api.pokemontcg.io/v2/cards?q=name:${id}`
				);

				const dataAPI = await responseAPI.json();

				console.log(dataAPI?.data[0]);

				setAllInfo(dataAPI?.data[0] || []);
			} catch (error) {
				setPending(false);
				console.log(error);
			} finally {
				setPending(false);
			}
		};

		takeAPI_Id();
	}, [id]);

	return (
		<div className="divHas-infoPage_PokemonAlone">
			{pending ? (
				<div className="flex items-center h-[60vh] justify-center gap-3">
					<Spin className="spin" size="large" />
					<span className="font-bold"> Loading ....</span>
				</div>
			) : (
				<div>
					<h3 className="font-bold text-white drop-shadow-md text-center py-3">
						{allInfo?.name} Is a good Pokemon! :){" "}
					</h3>
					<div className="h-3/5 flex flex-col gap-3 items-center divHas-img-detailsPokemon">
						<div className="max-w-[300px]">
							<img
								src={allInfo?.images.small}
								alt={`imagem do pokemon ${allInfo?.name}`}
							/>{" "}
						</div>
						<div
							className="flex flex-col items-center px-3 py-2 bg-white/80 w-3/5 rounded-xl hover:bg-gray-300 divHas-details"
							style={{ maxWidth: "400px", minWidth: "250px" }}
						>
							<h3 className="font-bold ">
								Detalhes do {allInfo?.name}
							</h3>
							<div className="flex flex-col  px-3 py-1 ">
								<p className="text-gray-900 font-bold py-1">
									Raridade:{" "}
									<span className="font-semibold text-purple-600">
										{" "}
										{allInfo?.rarity}{" "}
									</span>
								</p>
								<p className="font-bold text-gray-900 ">
									Fraqueza:{" "}
									<span className="text-red-600 font-semibold">
										{allInfo?.weaknesses?.[0].type || "Desconhecida"}{" "}
									</span>
								</p>
								<p className="font-bold text-gray-900 py-1">
									Curiosidade:{" "}
									<span className="font-semibold text-gray-800">
										{allInfo?.flavorText || "Nenhuma :p"}
									</span>{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="py-3 flex justify-center">
						<button
							type="button"
							onClick={() => window.history.go(-1)}
							className="bg-blue-600 w-40 rounded-lg h-7 hover:bg-blue-500 cursor-pointer text-white"
						>
							Voltar
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
