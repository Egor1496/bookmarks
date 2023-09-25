export interface URLType {
	hash: string;
	host: string;
	hostname: string;
	href: string;
	readonly origin: string;
	password: string;
	pathname: string;
	port: string;
	protocol: string;
	search: string;
	username: string;
	toString(): string;
}

export type bookmarksType = {
	id: string,
	link: string,
	imgLink?: string,
	title: string,
	description: string,
	tags: string,
	group: string,
}

export type filterType = [string, string];

export type sortValueType = "title" | "description" | "group" | "tags";

export type sortObgType = {
	value: sortValueType;
 	sortType: boolean;
}