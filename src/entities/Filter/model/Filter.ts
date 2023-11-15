import { bookmarksType, filterType } from "../../../processes"

class FilterBookmarks {
	static getFiltered(filter:filterType = ["", ""], bookmarks:bookmarksType[]) {
		let [groupNames, tagsNames] = filter;

		if (!groupNames && !tagsNames)
			return bookmarks;

		groupNames = groupNames.trim().toLocaleLowerCase();
		tagsNames = tagsNames.trim().toLocaleLowerCase();

		const filtered = bookmarks.filter((elem:bookmarksType) => {
			const cleanGroup = elem.group.trim().toLowerCase();
			const cleanTags = elem.tags.trim().toLowerCase();

			let isSuitableGroup = false,
				isSuitableTags = false;

			isSuitableGroup = cleanGroup === groupNames || groupNames === "";
			isSuitableTags = Boolean(~cleanTags.indexOf(tagsNames) || tagsNames === "");

			if (isSuitableGroup && isSuitableTags)
				return elem;
			else
				return false;
		});

		return filtered;
	}
}

export { FilterBookmarks };
