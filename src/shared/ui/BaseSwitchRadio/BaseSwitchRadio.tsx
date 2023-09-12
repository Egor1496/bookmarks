import css from "./BaseSwitchRadio.module.sass";

type propsTypse = {
	disabled?:boolean;
}

const BaseSwitchRadio = ({ disabled }:propsTypse) => {
	return (
		<div className={`${css["switch"]}`}>
			<input type="checkbox" className={`${css["switch"]}`} disabled={disabled} />
		</div>
	);
}

export { BaseSwitchRadio };