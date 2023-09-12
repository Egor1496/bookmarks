import css from "./GridСell.module.sass";

const GridСell = ({ children }:{ children?: React.ReactNode; }) => {
	return (
		<div className={css.main}>
			<div className={css.wrap}>{children}</div>
		</div >
	);
}

export { GridСell };