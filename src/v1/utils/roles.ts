export const UserPositions = [
	'api',
	'data',
	'design',
	'security',
	'2d-gfx',
	'3d-gfx',
] as const;

export type UserPosition = typeof UserPositions[number];

export enum AuthorityLevel {
	ADMIN = 1,
	MODERATOR,
	MEMBER,
}