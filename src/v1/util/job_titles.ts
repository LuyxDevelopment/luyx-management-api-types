export const JobTitles = [
	'Backend',
	'Frontend',
	'2d',
	'3d',
	'Admin',
] as const;

export type JobTitle = typeof JobTitles[number];