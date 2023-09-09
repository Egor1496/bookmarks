import css from "./BaseCheckbox.module.sass";

const BaseCheckbox = ({ disabled }:any) => {
	return (
		<div className={`${css["check"]}`}>
			<input type="checkbox" disabled={disabled} />
		</div>
	);
}

export { BaseCheckbox };