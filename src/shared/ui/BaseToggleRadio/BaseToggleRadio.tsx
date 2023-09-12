import { useState } from "react";
import sass from "./BaseToggleRadio.module.sass";

type propsTypse = {
	onClickChange?: (e:boolean) => void;
	defaultChecked?: boolean;
}

const BaseToggleRadio = (props:propsTypse) => {
	const {
		onClickChange = () => {},
		defaultChecked = false
	} = props;

	const [isChecked, setIsChecked] = useState(defaultChecked);

	const handlerChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
		onClickChange(e.target.checked);
	}

	return (
		<div className={`${sass["switch_wrap"]}`}>
			<input type="checkbox" className={`${sass["switch"]}`}
				checked={isChecked}
				onChange={handlerChangeInput}
			/>
		</div>
	);
}

export { BaseToggleRadio };