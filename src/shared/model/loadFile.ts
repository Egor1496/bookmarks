export type LoadFileCallbackType = (bookmarksList: string | ArrayBuffer | null) => void;

class LoadFile {
	static onDrop(e:any, callback:LoadFileCallbackType) {
		e.preventDefault();

		if (e.dataTransfer.items) {
			[...e.dataTransfer.items].forEach((item) => {
				if (item.kind === "file") {
					const file = item.getAsFile();
					const reader = new FileReader();
					reader.readAsText(file);
					reader.onload = () => {
						callback(reader.result);
					};
					reader.onerror = () => {
						console.log(reader.error);
					};
				}
			});
		}
	}

	static read(input:any, callback:LoadFileCallbackType) {
		const file = input.files[0];
		const reader = new FileReader();

		reader.readAsText(file);

		reader.onload = () => {
			callback(reader.result);
		};

		reader.onerror = () => {
			console.log(reader.error);
		};
	}
}

export { LoadFile };
