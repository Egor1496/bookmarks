import css from "./BaseSwitchRadio.module.sass";

const BaseSwitchRadio = ({ disabled }:any) => {
	return (
		<div className={`${css["switch"]}`}>
			<input type="checkbox" className={`${css["switch"]}`} disabled={disabled} />
		</div>
	);
}

export { BaseSwitchRadio };