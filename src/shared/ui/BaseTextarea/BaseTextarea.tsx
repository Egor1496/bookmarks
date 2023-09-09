import sass from "./BaseTextarea.module.sass";

const BaseTextarea = (props:any) => {

	const {
		state,
		setState,
		readonly,
		placeholder = "",
		width
	} = props;

	const handlerChangeTextarea = (e:any) => setState(e.target.value);

	return (
		<div className={sass.main}>
			<textarea className={`${sass.textarea} ${sass[width]} ${readonly && sass.disable}`}
				value={state}
				onChange={handlerChangeTextarea}
				readOnly={readonly}
				placeholder={placeholder}
			/>
		</div>
	);
}

export { BaseTextarea };