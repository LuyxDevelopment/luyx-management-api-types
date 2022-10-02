import { Base } from './base.js';

export interface Project extends Base {
	name: string;
	description: string;
	createdAt: number;
	deadline: number;
	gitHubURL: string;
	wallet: string;
	assignedUsers: string[];
}
