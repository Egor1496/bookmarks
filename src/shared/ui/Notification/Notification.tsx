import sass from "./Notification.module.sass";
import { BiError } from "react-icons/bi"

type stateType = {
	text?: string;
	style?: {};
	description?: string;
	alarm?: boolean;
	active?: boolean;
}

type propsType = {
	state?:stateType;
	children?: React.ReactNode;
}

const Notification = (props:propsType) => {
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