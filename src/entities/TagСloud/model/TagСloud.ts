import { bookmarksType } from "../../../processes"

class Tags {
	tags = new Set<string>();

	getTags(filledBookmarks:bookmarksType[]) {
		this.tags.clear();

		filledBookmarks.forEach((bookmark) => {
			bookmark.tags.split(",").forEach((tag) => {
				if (tag.trim()) this.tags.add(tag.trim());
			});
		});

		return [...this.tags].sort((a, b) => {
			if (a.length < 7 && b.length < 7) return a.length - b.length;
			else return a.localeCompare(b);
		});
	}

	updateState(setState:(newState:string) => void, tags:string) {
		setState(tags);
	}
}

export { Tags };