import { useState } from "react";
import css from "./BaseSelect.module.sass";

type propsType = {
	styles: {}
	options: {
		title: string;
		arrOption: Array<string>;
		iconUrl: string | null;
	};
}

const BaseSelect = (props:propsType) => {

	const {
		styles,
		options
	} = props;

	const [select, setSelect] = useState({ open: false, value: 0, text: "Опция 1" });

	const handlerClickToggle = (e: React.MouseEvent<HTMLElement>) => {
		if (e.currentTarget.getAttribute("data-number"))
			setSelect({
				open: !select.open,
				value: Number(e.currentTarget.getAttribute("data-number")),
				text: e.currentTarget.textContent?.trim() || ""
			});
		else
			setSelect({
				...select,
				open: !select.open,
			});
	}

	const classNamesToggle = `${css.select} ${select.open ? css.open : css.close}`;

	return (
		<div className={css.main}>
			<div className={classNamesToggle}
				onClick={handlerClickToggle}
				style={styles}
			>
				<div className={css["option-title"]}>
					<span>{options?.title || "Опции"}</span>
				</div>
				<div className={css["option-wrap"]}>
					{
						options?.arrOption?.map((elem, i) => {
							return <div key={i} className={css.option} data-number={i}>{elem}</div>
						}) || <div className={css.option} data-number="0">Опция</div>
					}
				</div>
			</div>
		</div >
	);
}

export { BaseSelect };