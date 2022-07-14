import { Base } from './base.js';

export interface User extends Base {
	firstName: string;
	lastName: string;
	contact: {
		discordId: string | null;
		email: string;
		phone: string | null;
	};
	assignedProjects: string[];
	hiredAt: number;
	jobTitles: string[];
	wallet: string;
}
