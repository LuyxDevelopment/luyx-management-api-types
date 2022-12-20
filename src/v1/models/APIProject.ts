import { ProjectStage } from '../index.js';
import { Base } from './base.js';

export interface APIProject extends Base {
	name: string;
	description: string;
	createdAt: number;
	deadline: number;
	isPrivate: boolean;
	stage: ProjectStage;
	wallet: string;
	assignedUsers: string[];
}
