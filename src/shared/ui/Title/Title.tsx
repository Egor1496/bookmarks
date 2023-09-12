import sass from "./Title.module.sass";

type propsTypse = {
	text?:string;
	style?:{};
	type?:string;
	floatIcon?:string;
	BorderStyle?:string;
	children?: React.ReactNode;
}

const Title = (props:propsTypse) => {

	const {
		text,
		style,
		children,
		type = "",
		floatIcon = "",
		BorderStyle = ""
	} = props;

	return (
		<div className={sass.main} >
			<div className={`
				${sass.title}
				${sass[type]}
				${sass[floatIcon]}
				${sass[BorderStyle]}
			`} style={style}>{children}{text}</div>
		</div >
	);
}

export { Title };