import { Link } from "react-router-dom";

import css from "./BaseDropMenu.module.sass";

const BaseDropMenu = () => {
	return (
		<nav id="navigation">
			<ul className={`${css["links"]}`}>
				<li>
					<Link to="/bookmarks/"><h1>Страницы</h1></Link>
					<ul className={`${css["drop"]}`}>
						<li><Link to="/bookmarks/"><h1>Главная</h1></Link></li>
						<li><Link to="/bookmarks/ui"><h1>UI Шаблон</h1></Link></li>
						<li><Link to="/bookmarks/demo"><h1>HTML Образец</h1></Link></li>
						<li><Link to="/bookmarks/eror"><h1>404</h1></Link></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export { BaseDropMenu };