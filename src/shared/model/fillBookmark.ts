import { getURL } from "./URL";

import { URLType } from "../../processes"

class FillBookmark {
	static getId(id:string) {
		const filledId = id;
		return filledId;
	}

	static getLink(link:string = "") {
		const filledLink = link;
		return filledLink;
	}

	static getImgLink(url:URLType) {
		const filledimgLink = url.hostname;
		return filledimgLink;
	}

	static getTitle(title:string = "", link:string) {
		const url = getURL(link);
		let filledTitle = title,
			isTitle = title.replace(/(.|,|-|_|;|:|'|)/gi, "");

		if (!isTitle) {
			filledTitle = url.hostname.replace(/(.com|www.|.ru|.net|.org|.biz|dvd.|.io)/g, "");
		}

		return filledTitle;
	}

	static getDescription(description:string = "") {
		const filledDescription = description;
		return filledDescription;
	}

	static getTags(tags:string = "") {
		const filledTags = tags.trim() && tags.toLowerCase().trim().split(",");
		return filledTags;
	}

	static getGroup(group:string = "") {
		const filledGroup = group.trim() && group.toLowerCase().trim().split(",");
		return filledGroup;
	}
}

export { FillBookmark };
