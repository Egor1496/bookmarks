import sass from "./BaseTextarea.module.sass";

type propsType = {
	state?:string;
	setState?:(newState:string) => void;
	readonly?:boolean;
	placeholder?:string;
	width?: string;
}

const BaseTextarea = (props:propsType) => {

	const {
		state,
		setState = () => {},
		readonly,
		placeholder = "",
		width = ""
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