function getRandomInt(max:any) {
	return Math.floor(Math.random() * max);
}

const BASE_PARAMS:any = [
	{
		color1: "#c2c2c2",
		color2: "#333",
		color3: "#c2c2c2",
		color4: "#333",
		color5: "#D1E8E2",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#D1E8E2",

		bgBody: "#333",
		bgHeader: "#c2c2c2",
		bgMenu: "#c2c2c2",
		bgMain: "#c2c2c2",
		bgAside: "#c2c2c2",
		bgPreviewBookamrk: "#D1E8E2",
		bgTitleBookamrk: "#D1E8E2",
		bgDescriptionBookamrk: "#333",
		bgControl: "#D1E8E2",
		bgControlHover: "#333",

		svgLogo: "#333",
		svgBookamrk: "#333",
		svgBookamrkHover: "#c2c2c2",
		svgControl: "#333",
		svgControlHover: "#D1E8E2",
	},
	{
		color1: "#FFCB9A",
		color2: "#116466",
		color3: "#D9B08C",
		color4: "#2C3531",
		color5: "#D1E8E2",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#D1E8E2",

		bgBody: "#2C3531",
		bgHeader: "#D9B08C",
		bgMenu: "#D9B08C",
		bgMain: "#FFCB9A",
		bgAside: "#FFCB9A",
		bgPreviewBookamrk: "#D1E8E2",
		bgTitleBookamrk: "#D1E8E2",
		bgDescriptionBookamrk: "#116466",
		bgControl: "#D1E8E2",
		bgControlHover: "#116466",

		svgLogo: "#116466",
		svgBookamrk: "#333",
		svgBookamrkHover: "#D9B08C",
		svgControl: "#116466",
		svgControlHover: "#D1E8E2",
	},
	{
		color1: "#e4d791",
		color2: "#6c3030",
		color3: "#cee5b4",
		color4: "#333",
		color5: "#D2FDFF",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#cee5b4",

		bgBody: "#2C3531",
		bgHeader: "#e4d791",
		bgMenu: "#e4d791",
		bgMain: "#cee5b4",
		bgAside: "#cee5b4",
		bgPreviewBookamrk: "#D2FDFF",
		bgTitleBookamrk: "#D2FDFF",
		bgDescriptionBookamrk: "#6c3030",
		bgControl: "#dee5b4",
		bgControlHover: "#6c3030",

		svgLogo: "#6c3030",
		svgBookamrk: "#333",
		svgBookamrkHover: "#dee5b4",
		svgControl: "#6c3030",
		svgControlHover: "#dee5b4",
	},
	{
		color1: "#a4b7db",
		color2: "#333",
		color3: "#a4b7db",
		color4: "#333",
		color5: "#D1E8E2",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#D1E8E2",

		bgBody: "#333",
		bgHeader: "#a4b7db",
		bgMenu: "#a4b7db",
		bgMain: "#a4b7db",
		bgAside: "#a4b7db",
		bgPreviewBookamrk: "#D1E8E2",
		bgTitleBookamrk: "#D1E8E2",
		bgDescriptionBookamrk: "#333",
		bgControl: "#D1E8E2",
		bgControlHover: "#333",

		svgLogo: "#333",
		svgBookamrk: "#333",
		svgBookamrkHover: "#a4b7db",
		svgControl: "#333",
		svgControlHover: "#D1E8E2",
	},
	{
		color1: "#B4DFE5",
		color2: "#303C6C",
		color3: "#8ac7cf",
		color4: "#333",
		color5: "#D2FDFF",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#B4DFE5",

		bgBody: "#2C3531",
		bgHeader: "#8ac7cf",
		bgMenu: "#8ac7cf",
		bgMain: "#B4DFE5",
		bgAside: "#B4DFE5",
		bgPreviewBookamrk: "#D2FDFF",
		bgTitleBookamrk: "#D2FDFF",
		bgDescriptionBookamrk: "#303C6C",
		bgControl: "#ccf9ff",
		bgControlHover: "#303C6C",

		svgLogo: "#303C6C",
		svgBookamrk: "#333",
		svgBookamrkHover: "#ccf9ff",
		svgControl: "#303C6C",
		svgControlHover: "#ccf9ff",
	},
	{
		color1: "#a8dba4",
		color2: "#333",
		color3: "#a8dba4",
		color4: "#333",
		color5: "#D1E8E2",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#D1E8E2",

		bgBody: "#333",
		bgHeader: "#a8dba4",
		bgMenu: "#a8dba4",
		bgMain: "#a8dba4",
		bgAside: "#a8dba4",
		bgPreviewBookamrk: "#D1E8E2",
		bgTitleBookamrk: "#D1E8E2",
		bgDescriptionBookamrk: "#333",
		bgControl: "#D1E8E2",
		bgControlHover: "#333",

		svgLogo: "#333",
		svgBookamrk: "#333",
		svgBookamrkHover: "#a8dba4",
		svgControl: "#333",
		svgControlHover: "#D1E8E2",
	},
	{
		color1: "#dba4c5",
		color2: "#333",
		color3: "#dba4c5",
		color4: "#333",
		color5: "#D1E8E2",
		colorLogo: "#333",
		colorTitleBookamrk: "#333",
		colorDescriptionBookamrk: "#ddd",
		colorControl: "#333",
		colorControlHover: "#D1E8E2",

		bgBody: "#333",
		bgHeader: "#dba4c5",
		bgMenu: "#dba4c5",
		bgMain: "#dba4c5",
		bgAside: "#dba4c5",
		bgPreviewBookamrk: "#D1E8E2",
		bgTitleBookamrk: "#D1E8E2",
		bgDescriptionBookamrk: "#333",
		bgControl: "#D1E8E2",
		bgControlHover: "#333",

		svgLogo: "#333",
		svgBookamrk: "#333",
		svgBookamrkHover: "#dba4c5",
		svgControl: "#333",
		svgControlHover: "#D1E8E2",
	},
	{
		color1: "#4C495D",
		color2: "#802BB1",
		color3: "#564F6F",
		color4: "#802BB1",
		color5: "#D1D7E0",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#D1E8E2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#D1D7E0",
		colorControl: "#D1D7E0",
		colorControlHover: "#333",

		bgBody: "#2D283E",
		bgHeader: "#222629",
		bgMenu: "#222629",
		bgMain: "#464646",
		bgAside: "#222629",
		bgPreviewBookamrk: "#564F6F",
		bgTitleBookamrk: "#564F6F",
		bgDescriptionBookamrk: "#222629",
		bgControl: "#564F6F",
		bgControlHover: "#D1D7E0",

		svgLogo: "#802BB1",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1D7E0",
		svgControlHover: "#464646",
	},
	{
		color1: "#5d4949",
		color2: "#b12b2b",
		color3: "#6f4f4f",
		color4: "#b12b2b",
		color5: "#D1D7E0",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#D1E8E2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#D1D7E0",
		colorControl: "#D1D7E0",
		colorControlHover: "#333",

		bgBody: "#3e2828",
		bgHeader: "#292222",
		bgMenu: "#292222",
		bgMain: "#464646",
		bgAside: "#292222",
		bgPreviewBookamrk: "#6f4f4f",
		bgTitleBookamrk: "#6f4f4f",
		bgDescriptionBookamrk: "#292222",
		bgControl: "#6f4f4f",
		bgControlHover: "#D1D7E0",

		svgLogo: "#b12b2b",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1D7E0",
		svgControlHover: "#464646",
	},
	{
		color1: "#4d4f47",
		color2: "#b4c232",
		color3: "#222629",
		color4: "#b4c232",
		color5: "#6B6E70",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#D1E8E2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#D1E8E2",
		colorControl: "#D1E8E2",
		colorControlHover: "#333",

		bgBody: "#88892f",
		bgHeader: "#282922",
		bgMenu: "#282922",
		bgMain: "#464646",
		bgAside: "#282922",
		bgPreviewBookamrk: "#6b6e70",
		bgTitleBookamrk: "#6b6e70",
		bgDescriptionBookamrk: "#282922",
		bgControl: "#6b6e70",
		bgControlHover: "#D1E8E2",

		svgLogo: "#b4c232",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1E8E2",
		svgControlHover: "#464646",
	},
	{
		color1: "#4d5d49",
		color2: "#3db12b",
		color3: "#4d5d49",
		color4: "#3db12b",
		color5: "#D1D7E0",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#D1E8E2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#D1D7E0",
		colorControl: "#D1D7E0",
		colorControlHover: "#333",

		bgBody: "#293e28",
		bgHeader: "#222923",
		bgMenu: "#222923",
		bgMain: "#464646",
		bgAside: "#222923",
		bgPreviewBookamrk: "#516f4f",
		bgTitleBookamrk: "#516f4f",
		bgDescriptionBookamrk: "#222923",
		bgControl: "#516f4f",
		bgControlHover: "#D1D7E0",

		svgLogo: "#3db12b",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1D7E0",
		svgControlHover: "#464646",
	},
	{
		color1: "#495d5a",
		color2: "#2bb1ad",
		color3: "#495d5a",
		color4: "#2bb1ad",
		color5: "#D1D7E0",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#D1E8E2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#D1D7E0",
		colorControl: "#D1D7E0",
		colorControlHover: "#333",

		bgBody: "#283d3e",
		bgHeader: "#222928",
		bgMenu: "#222928",
		bgMain: "#464646",
		bgAside: "#222928",
		bgPreviewBookamrk: "#4f6f6b",
		bgTitleBookamrk: "#4f6f6b",
		bgDescriptionBookamrk: "#222928",
		bgControl: "#4f6f6b",
		bgControlHover: "#D1D7E0",

		svgLogo: "#2bb1ad",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1D7E0",
		svgControlHover: "#464646",
	},
	{
		color1: "#464646",
		color2: "#1dbcc5",
		color3: "#323232",
		color4: "#2C3531",
		color5: "#D1E8E2",
		сolorH: "var(--colorDef1)",
		сolorP: "var(--colorDef1)",
		сolorA1: "var(--colorDef1)",
		сolorA2: "var(--color2)",
		colorLogo: "#d1e8e2",
		colorTitleBookamrk: "#ddd",
		colorDescriptionBookamrk: "#333",
		colorControl: "#D1E8E2",
		colorControlHover: "#333",

		bgBody: "#40504f",
		bgHeader: "#323232",
		bgMenu: "#323232",
		bgMain: "#464646",
		bgAside: "#464646",
		bgPreviewBookamrk: "#116466",
		bgTitleBookamrk: "#116466",
		bgDescriptionBookamrk: "#D1E8E2",
		bgControl: "#116466",
		bgControlHover: "#D1E8E2",

		svgLogo: "#1dbcc5",
		svgBookamrk: "#333",
		svgBookamrkHover: "#666666",
		svgControl: "#D1E8E2",
		svgControlHover: "#116466",
	},
	{
		color1: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		color2: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		color3: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		color4: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		color5: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		сolorH: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		сolorP: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		сolorA1: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		сolorA2: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		colorLogo: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		colorTitleBookamrk: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		colorDescriptionBookamrk: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		colorControl: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		colorControlHover: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,

		bgBody: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgHeader: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgMenu: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgMain: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgAside: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgPreviewBookamrk: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgTitleBookamrk: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgDescriptionBookamrk: "#D1E8E2",
		bgControl: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		bgControlHover: "#D1E8E2",

		svgLogo: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		svgBookamrk: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		svgBookamrkHover: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		svgControl: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
		svgControlHover: `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`,
	},
];

export { BASE_PARAMS };
