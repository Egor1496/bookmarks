import { nanoid } from "nanoid";

import { SortingBookmarks, SearchBookmarks, FilterBookmarks } from "../../../entities";
import { JsonHelper, LocalStorage } from "../../../shared/model";

const DEFAULT_BOOKMARKS_TMP:any = [
	// {
	// 	id: nanoid(),
	// 	link: "https://www.youtube.com/",
	// 	title: "youtube",
	// 	description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
	// 	tags: "Видео, Соц. сеть",
	// 	group: "Избранные",
	// },
	// {
	// 	id: nanoid(),
	// 	link: "https://mail.ru/",
	// 	title: "mail",
	// 	description: "Почта Mail.ru — крупнейшая бесплатная почта.",
	// 	tags: "Почта",
	// 	group: "Избранные",
	// },
	// {
	// 	id: nanoid(),
	// 	link: "https://dzen.ru",
	// 	title: "dzen",
	// 	description: "Это Дзен — платформа для создания и просмотра контента.",
	// 	tags: "Видео, Соц. сеть",
	// 	group: "Избранные",
	// },
	// {
	// 	id: nanoid(),
	// 	link: "https://translate.yandex.ru/",
	// 	title: "translate.yandex",
	// 	description: "Перевод с английского",
	// 	tags: "Переводчик",
	// 	group: "Избранные, Инструменты",
	// },
];

class BookmarksArray {
	bookmarksTmp:any;
	bookmarks:any;

	constructor(bookmarksTmp:any) {
		this.bookmarksTmp = bookmarksTmp;
		this.bookmarks = JsonHelper.getObject(LocalStorage.getStore("bookmarks", "[]"));

		if (this.bookmarks.length === 0) this.bookmarks = this.bookmarksTmp;
	}

	deleteBookmark(id:any) {
		this.bookmarks.forEach((el:any, i:any) => {
			if (el.id === id) {
				this.bookmarks.splice(i, 1);
				LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON([...this.bookmarks])));
			}
		});
	}

	editBookmark(id:any, newBookmark:any) {
		this.bookmarks.forEach((el:any, i:any) => {
			if (el.id === id) {
				this.bookmarks.splice(i, 1);
				LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON([...this.bookmarks])));
				this.uploadBookmarks(newBookmark);
			}
		});
	}

	uploadBookmarks(bookmark:any) {
		this.bookmarks = [...this.bookmarks, { ...bookmark, id: nanoid() }];
		LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON(this.bookmarks)));
	}

	getBookmarks(filterName?:any, sortSelected?:any, searchText?:any):any {
		let filledBookmarks = FilterBookmarks.getFiltered(filterName, this.bookmarks);
		filledBookmarks = SortingBookmarks.getSorted(sortSelected, filledBookmarks);
		filledBookmarks = SearchBookmarks.find(searchText, filledBookmarks);
		return filledBookmarks;
	}
}

export { BookmarksArray, DEFAULT_BOOKMARKS_TMP };
