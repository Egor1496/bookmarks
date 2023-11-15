import sass from "./BaseModal.module.sass";

import { AiOutlineCloseCircle } from 'react-icons/ai';

type propsTypes = {
	cssInner?: {};
	cssBg?: {};
	cssModal?: {};
	children?: React.ReactNode;
	active?:boolean;
	setActive?:(newState:boolean) => void;
}

const BaseModal = (props:propsTypes) => {
	const {
		cssInner,
		cssBg,
		cssModal,
		children,
		active = false,
		setActive = () => {}
	} = props;

	const handlerClickClose = () => {
		setActive(false);
	}

	return (
		<>
			{
				active && (<div>
					<div className={sass.bg} style={cssBg} onClick={handlerClickClose} />
					<div className={sass.modal} style={cssModal} >
						<div className={sass.close} onClick={handlerClickClose} >
							<AiOutlineCloseCircle />
						</div>
						<div className={sass.mainInner} style={cssInner} >
							{children}
						</div>
					</div>
				</div>)
			}
		</>
	);
}

export { BaseModal };