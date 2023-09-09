class JsonHelper {
	static getJSON(obj:any) {
		return obj ? JSON.stringify(obj) : null;
	}
	static getObject(json:any) {
		return json ? JSON.parse(json) : null;
	}
}

export { JsonHelper };
