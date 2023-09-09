class Groups {
	groups = new Set();

	getGroups(bookmarks:any) {
		this.groups.clear();

		bookmarks.forEach((bookmark:any) => {
			bookmark.group.split(",").forEach((group:any) => {
				if (group.trim()) this.groups.add(group.trim());
			});
		});

		return [...this.groups].sort((a:any, b:any) => {
			return a.localeCompare(b);
		});
	}

	updateState(setState:any, groups:any) {
		setState(groups);
	}
}

export { Groups };
