import css from "./Grid.module.sass";

const Grid = ({ children }:{ children?: React.ReactNode }) => {
	return (
		<div className={css.main}>
			<div className={css.wrap}>{children}</div>
		</div >
	);
}

export { Grid };