class LocalStorage {
	static setStore(key:string = "null", value:string = "") {
		localStorage.setItem(key, value);
	}
	static getStore(key:string = "null", defaultValue:string = "") {
		return localStorage.getItem(key) || defaultValue;
	}
}

export { LocalStorage };
