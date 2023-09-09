import sass from "./Br.module.sass";

const Br = ({ style }:any) => {
	return (
		<div className={sass.main} >
			<div className={`${sass.border}`} style={style} />
		</div >
	);
}

export { Br };