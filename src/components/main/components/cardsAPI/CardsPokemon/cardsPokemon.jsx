import Link from "next/link";
import "./cardsPokemon.scss";

export default function PokemonCard({ pokemon }) {
	/*
		O background color poderia ser melhor, mas tou com preguiça geral, n irei mentir.
		bg-orange-300
	*/

	return (
		<div
			id={pokemon?.id}
			className="flex items-center justify-center "
		>
			<div className="flex flex-col items-center justify-around gap-4 bg-amber-500 shadow-md p-3 divHas-allCards  m-2.5 rounded-2xl">
				<h2 className="font-bold text-white drop-shadow-md py-2">
					{" "}
					{pokemon?.name}{" "}
				</h2>
				<Link href={`/character/${pokemon?.name}`}>
					<img
						src={pokemon?.images.small}
						alt={pokemon?.name}
						className="w-40 h-40 "
					/>
				</Link>
			</div>
		</div>
	);
}
