type nameList = "" | "transparentStyle" | "noHoverStyle" | "noBorderStyle" |
"bigStyle" | "smallStyle" | "buttonActive" | "baseSettings" |
"iconTop" | "iconRight" | "iconBottom" | "iconDarkColor";

type propsTypes = {
	text?: string;
	styleNameList?: Array<nameList>;
	disabled?: boolean;
	callBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
	css?: React.CSSProperties;
	styleName?: nameList;
}

export type { propsTypes }