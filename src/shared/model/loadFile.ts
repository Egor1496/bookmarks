class LoadFile {
	static onDrop(e:any, callback:any) {
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

	static read(input:any, callback:any) {
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
