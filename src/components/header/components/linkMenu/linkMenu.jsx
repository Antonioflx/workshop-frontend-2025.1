import "./link.scss";
import { FaHome } from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import Link from "next/link";

export default function LinkMenu() {
	return (
		<div className="flex gap-6 divHas-Links">
			<div className="divHas-span-a">
				<span>
					<FaHome className="text-2xl" />
				</span>
				<Link href="/home">Home</Link>
			</div>
			<div className="divHas-span-a">
				<span>
					<TbCardsFilled className="text-2xl" />
				</span>
				<Link href="/cartas">Cartas</Link>
			</div>
			<div className="divHas-span-a">
				<span>
					<LuPackageOpen className="text-2xl" />
				</span>
				<Link href="/carrosel">Carrosel</Link>
			</div>
		</div>
	);
}
