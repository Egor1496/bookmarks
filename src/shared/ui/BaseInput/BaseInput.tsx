import sass from "./BaseInput.module.sass";

type propsTypse = {
	state?:string;
	setState?:(newState:string) => void;
	readonly?:boolean;
	placeholder?:string;
	children?: React.ReactNode;
}

const BaseInput = (props:propsTypse) => {

	const {
		state = "",
		setState = () => {},
		readonly,
		placeholder = "",
		children,
	} = props;

	const handlerChangeInput = (e:React.ChangeEvent<HTMLInputElement> ):void => {
		setState(e.target.value);
	}

	const classNamesInput = `${sass.input} ${(readonly && sass.disable) || ""}`;

	return (
		<div className={sass.main}>
			<input className={classNamesInput}
				type="text"
				value={state}
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