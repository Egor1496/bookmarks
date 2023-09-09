class Tags {
	tags = new Set();

	getTags(filledBookmarks:any) {
		this.tags.clear();

		filledBookmarks.forEach((bookmark:any) => {
			bookmark.tags.split(",").forEach((tag:any) => {
				if (tag.trim()) this.tags.add(tag.trim());
			});
		});

		return [...this.tags].sort((a:any, b:any) => {
			if (a.length < 7 && b.length < 7) return a.length - b.length;
			else return a.localeCompare(b);
		});
	}

	updateState(setState:any, tags:any) {
		setState(tags);
	}
}

export { Tags };