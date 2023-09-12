import css from "./BaseCheckbox.module.sass";

type propsTypes = { disabled?:boolean; }

const BaseCheckbox = (props:propsTypes) => {
	const { disabled } = props;
	return (
		<div className={`${css["check"]}`}>
			<input type="checkbox" disabled={disabled} />
		</div>
	);
}

export { BaseCheckbox };