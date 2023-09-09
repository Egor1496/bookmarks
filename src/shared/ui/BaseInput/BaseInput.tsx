import sass from "./BaseInput.module.sass";

const BaseInput = (props:any) => {

	const {
		state,
		setState,
		readonly,
		placeholder = "",
		children,
	} = props;

	const handlerChangeInput = (e:any) => {
		setState(e.target.value);
	}

	const classNamesInput = `${sass.input} ${(readonly && sass.disable) || ""}`;

	return (
		<div className={sass.main}>
			<input className={classNamesInput}
				type="text" value={state}
				onChange={handlerChangeInput}
				readOnly={readonly}
				placeholder={placeholder}
			/>
			<div className={sass.icon}>
				{children}
			</div>
		</div>
	);
}

export { BaseInput };