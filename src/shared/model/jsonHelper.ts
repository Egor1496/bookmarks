class JsonHelper {
	static getJSON(obj:object):string | null{
		return obj ? JSON.stringify(obj) : null;
	}
	static getObject(json:string):object[]{
		return json ? JSON.parse(json) : null;
	}
}

export { JsonHelper };
