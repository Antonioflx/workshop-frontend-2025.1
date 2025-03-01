import "./link.scss";
import { FaHome } from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";

export default function LinkMenu() {
	return (
		<div className="flex gap-6 divHas-Links">
			<div className="divHas-span-a">
				<span>
					<FaHome className="text-2xl" />
				</span>
				<a href="#">Home</a>
			</div>
			<div className="divHas-span-a">
				<span>
					<TbCardsFilled className="text-2xl" />
				</span>
				<a href="#">Cartas</a>
			</div>
			<div className="divHas-span-a">
				<span>
					<LuPackageOpen className="text-2xl" />
				</span>
				<a href="#">Carrosel</a>
			</div>
		</div>
	);
}
