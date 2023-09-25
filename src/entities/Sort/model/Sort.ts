import { bookmarksType, sortValueType, sortObgType } from "../../../processes"

type typyType = {
	title: (bookmarks:bookmarksType[], type:boolean) => bookmarksType[]
	description: (bookmarks:bookmarksType[], type:boolean) => bookmarksType[]
	tags: (bookmarks:bookmarksType[], type:boolean) => bookmarksType[]
	group: (bookmarks:bookmarksType[], type:boolean) => bookmarksType[]
}

const defaultType:sortObgType = { value: "title", sortType: true };

class SortingBookmarks {

	static sortTitle(bookmarks:bookmarksType[], type = true) {
		return bookmarks.sort((a, b) => {
			if (!a.title) return 0;
			if (!b.title) return 0;
			return type ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
		});
	}

	static sortDescription(bookmarks:bookmarksType[], type = true) {
		return bookmarks.sort((a, b) => {
			if (!a.description) return 0;
			if (!b.description) return 0;
			return type ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
		});
	}

	static sortTags(bookmarks:bookmarksType[], type = true) {
		return bookmarks.sort((a, b) => {
			if (!a.tags) return 0;
			if (!b.tags) return 0;
			return type ? a.tags.localeCompare(b.tags) : b.tags.localeCompare(a.tags);
		});
	}

	static sortGroup(bookmarks:bookmarksType[], type = true) {
		return bookmarks.sort((a, b) => {
			if (!a.group) return 0;
			if (!b.group) return 0;
			return type ? a.group.localeCompare(b.group) : b.group.localeCompare(a.group);
		});
	}

	static getSorted(sortObg = defaultType, bookmarks:bookmarksType[]) {
		const type:typyType = {
			title: SortingBookmarks.sortTitle,
			description: SortingBookmarks.sortDescription,
			tags: SortingBookmarks.sortTags,
			group: SortingBookmarks.sortGroup,
		};
		return type[sortObg.value.trim().toLowerCase() as sortValueType](bookmarks, sortObg.sortType);
	}
}

export { SortingBookmarks };
