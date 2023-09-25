import { nanoid } from "nanoid";

import { bookmarksType, filterType, sortObgType } from "../../../processes"
import { SortingBookmarks, SearchBookmarks, FilterBookmarks } from "../../../entities";
import { JsonHelper, LocalStorage } from "../../../shared/model";

const DEFAULT_BOOKMARKS_TMP:bookmarksType[] = [
	{
		id: nanoid(),
		link: "https://ya.ru/",
		title: "Яндекс",
		description: "Поисковая система Yandex.ru",
		tags: "Поисковик, Соц. сеть",
		group: "",
	},
	{
		id: nanoid(),
		link: "https://www.google.ru/",
		title: "Гугл",
		description: "Google — поисковая система.",
		tags: "Поисковик, Соц. сеть",
		group: "",
	},
	{
		id: nanoid(),
		link: "https://www.youtube.com/",
		title: "youtube",
		description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
		tags: "Видео, Соц. сеть",
		group: "Избранные",
	},
	{
		id: nanoid(),
		link: "https://www.twitch.tv/",
		title: "twitch",
		description: "Видеостриминговый сервис.",
		tags: "Видео, Соц. сеть",
		group: "",
	},
	{
		id: nanoid(),
		link: "https://vk.com",
		title: "VK",
		description: "vk.com - социальная сеть",
		tags: "Соц. сеть",
		group: "Избранные",
	},
	{
		id: nanoid(),
		link: "https://telegram.org/",
		title: "telegram",
		description: "Система мгновенного обмена сообщениями",
		tags: "Соц. сеть",
		group: "",
	},
	{
		id: nanoid(),
		link: "https://facebook.com/",
		title: "facebook",
		description: "facebook.com - социальная сеть",
		tags: "Соц. сеть",
		group: "",
	},
	{
		id: nanoid(),
		link: "https://translate.yandex.ru/",
		title: "Перевод",
		description: "Перевод с английского",
		tags: "Переводчик, Инструменты",
		group: "Избранные",
	},
	{
		id: nanoid(),
		link: "https://mail.ru/",
		title: "mail",
		description: "Почта Mail.ru — крупнейшая бесплатная почта.",
		tags: "Почта",
		group: "Избранные",
	},
	{
		id: nanoid(),
		link: "https://dzen.ru",
		title: "dzen",
		description: "Это Дзен — платформа для создания и просмотра контента.",
		tags: "Новости, Соц. сеть",
		group: "Избранные",
	},
];

class BookmarksArray {
	bookmarksTmp:bookmarksType[];
	bookmarks:bookmarksType[];

	constructor(bookmarksTmp:bookmarksType[]) {
		this.bookmarksTmp = bookmarksTmp;
		this.bookmarks = JsonHelper.getObject(LocalStorage.getStore("bookmarks", "[]")) as bookmarksType[];

		if (this.bookmarks.length === 0) this.bookmarks = this.bookmarksTmp;
	}

	deleteBookmark(id:string) {
		this.bookmarks.forEach((el, i) => {
			if (el.id === id) {
				this.bookmarks.splice(i, 1);
				LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON([...this.bookmarks])));
			}
		});
	}

	editBookmark(id:string, newBookmark:bookmarksType) {
		this.bookmarks.forEach((el, i) => {
			if (el.id === id) {
				this.bookmarks.splice(i, 1);
				LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON([...this.bookmarks])));
				this.uploadBookmarks(newBookmark);
			}
		});
	}

	uploadBookmarks(bookmark:bookmarksType) {
		this.bookmarks = [...this.bookmarks, { ...bookmark, id: nanoid() }];
		LocalStorage.setStore("bookmarks", String(JsonHelper.getJSON(this.bookmarks)));
	}

	getBookmarks(filterName?:filterType, sortSelected?:sortObgType, searchText?:string):bookmarksType[] {
		let filledBookmarks = FilterBookmarks.getFiltered(filterName, this.bookmarks);
		filledBookmarks = SortingBookmarks.getSorted(sortSelected, filledBookmarks);
		filledBookmarks = SearchBookmarks.find(searchText, filledBookmarks);
		return filledBookmarks;
	}
}

export { BookmarksArray, DEFAULT_BOOKMARKS_TMP };
