import { Base } from './base.js';

export interface APIProject extends Base {
	name: string;
	description: string | null;
	createdAt: number;
	deadline: number;
	gitHubURL: string;
	wallet: string;
	assignedUsers: string[];
}
