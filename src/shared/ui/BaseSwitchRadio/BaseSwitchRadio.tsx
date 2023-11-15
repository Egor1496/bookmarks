import css from "./BaseSwitchRadio.module.sass";

type propsType = {
	disabled?:boolean;
}

const BaseSwitchRadio = ({ disabled }:propsType) => {
	return (
		<div className={`${css["switch"]}`}>
			<input type="checkbox" className={`${css["switch"]}`} disabled={disabled} />
		</div>
	);
}

export { BaseSwitchRadio };