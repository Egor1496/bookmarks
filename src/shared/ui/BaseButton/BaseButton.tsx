import sass from "./BaseButton.module.sass";

import { propsTypes } from "./types"

const BaseButton = (props:propsTypes) => {

	const {
		text = "",
		css = {},
		styleName = "",
		styleNameList = [],
		disabled = false,
		callBack = () => {},
		children = null,
	}:propsTypes = props;

	let classNamesButton:string = `${sass[styleName] || ""}`;

	for (let i = 0; i < styleNameList.length; i++) {
		classNamesButton += " " + (sass[styleNameList[i]] || "");
	}

	const handlerClickButton = (e: React.MouseEvent<HTMLButtonElement>) => callBack(e);

	return (
		<div className={sass.main}>
			<button
				className={classNamesButton}
				style={css}
				onClick={handlerClickButton}
				disabled={disabled}>
				{children}
				{text}
			</button>
		</div >
	);
}

export { BaseButton };