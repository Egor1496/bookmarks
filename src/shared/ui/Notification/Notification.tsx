import sass from "./Notification.module.sass";
import { BiError } from "react-icons/bi"

type stateTypse = {
	text?: string;
	style?: {};
	description?: string;
	alarm?: boolean;
	active?: boolean;
}

type propsTypse = {
	state?:stateTypse;
	children?: React.ReactNode;
}

const Notification = (props:propsTypse) => {
	const {
		children = null,
		state = {
			text: "",
			style: {},
			description: "",
			alarm: false,
			active: false
		},
	} = props;

	const classNamesClose = `${sass.main} ${state.active ? sass.active : sass.close}`;
	const classNamesNotification = `${sass.notification} ${state.alarm && sass.alarm}`;

	return (
		<div className={classNamesClose} >
			<div className={sass.wrap}>
				<div className={classNamesNotification} style={state.style}>
					{children || <BiError />} <span>{state.text}</span> {state.description}
				</div>
			</div>
		</div >
	);
}

export { Notification };