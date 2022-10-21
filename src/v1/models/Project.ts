import { Base } from './base.js';
import { User } from './User.js';
import { Wallet } from './Wallet.js';

export interface Project extends Base {
	name: string;
	description: string;
	createdAt: number;
	deadline: number;
	gitHubURL: string;
	wallet: Wallet;
	assignedUsers: User[];
	assign(user: User): Promise<boolean>;
	unassign(user: User): Promise<boolean>;
}
