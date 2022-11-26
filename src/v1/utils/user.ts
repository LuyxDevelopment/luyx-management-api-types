export const UserSubPositions = [
	'api',
	'data',
	'design',
	'security',
	'2d-gfx',
	'3d-gfx',
] as const;

export type UserSubPosition = typeof UserSubPositions[number];

export const UserPositionTitles = [
	'Management',
	'HR',
	'Developer',
	'Artist',
] as const;

export type UserPositionTitle = typeof UserPositionTitles[number];

export enum AuthorityLevel {
	ADMIN = 1,
	MODERATOR,
	MEMBER,
}