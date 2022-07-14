import { Base } from './base.js';

export interface Project extends Base {
	name: string;
	description: string;
	startedAt: number;
	deadline: number;
	wallet: string;
	assignedUsers: string[];
}
