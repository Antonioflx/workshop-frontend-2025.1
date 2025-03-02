import Link from "next/link";

export default function PokemonCard({ pokemon }) {
	return (
		<div
			id={pokemon?.id}
			className="flex items-center justify-center"
		>
			<div className="flex flex-col items-center justify-around gap-4 w-80 p-3 divHas-allCards">
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
