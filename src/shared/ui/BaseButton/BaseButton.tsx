import sass from "./BaseButton.module.sass";

const BaseButton = (props:any) => {

	const {
		text,
		css,
		styleName,
		styleNameList = [],
		disabled,
		callBack,
		children,
	} = props;

	let classNamesButton = `${sass[styleName] || ""}`;

	for (let i = 0; i < styleNameList.length; i++) {
		classNamesButton += " " + (sass[styleNameList[i]] || "");
	}

	const handlerClickButton = (e:any) => callBack(e);

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