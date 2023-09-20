type stateType = {
	active?: boolean,
	text?: string,
	description?: string,
	alarm?: boolean,
	style?: object,
	delay?: number;
}

type setStateType =  (state:stateType) => void;

const sendMesageNotification = (state:stateType, setState:setStateType) => {
	setState({
		active: true,
		text: state?.text,
		description: state?.description,
		alarm: state?.alarm,
		style: state?.style,
	});
	setTimeout(() => {
		setState({
			...state,
			active: false,
		});
	}, state?.delay || 2000);
};

export { sendMesageNotification };
