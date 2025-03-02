1; /*
     quando usu clicar no hamburguer
        -> trazer a div do lado esquerdo para a direita 
        -> mudar o icon para x e aparecer o <Link />
*/
import "../../headerStyle.scss";
import styles from "./firstMenu.module.scss";
import { IoMdClose } from "react-icons/io";
import LinkMenu from "../linkMenu/linkMenu";

export default function ShowMenu({ tema, onClick }) {
	return (
		<div
			className={`${tema} ${styles.firstMenu} items-end`}
			id="showMenu"
		>
			<IoMdClose
				className="text-2xl text-black "
				id="menu-close"
				onClick={onClick}
			/>
			<LinkMenu />
		</div>
	);
}
