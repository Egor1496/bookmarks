import sass from "./MyLabel.module.sass";

type propsTypse = {
	labelText?:string;
	position?:string;
	width?:string;
	children?: React.ReactNode;
}

const MyLabel = (props:propsTypse) => {

	const { labelText = "", children, position = "top", width="" } = props;

	return (
		<div className={sass.main}>
			{
				<label className={`${sass.label} ${sass[width]} ${sass[position]}`}>
					{labelText}
					{children}
				</label>
			}
		</div>
	);
}

export { MyLabel };