import css from "./GridСell.module.css";

const GridСell = ({ children }:any) => {
	return (
		<div className={css.main}>
			<div className={css.wrap}>{children}</div>
		</div >
	);
}

export { GridСell };