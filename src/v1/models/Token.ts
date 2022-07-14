import { Base } from './base.js';

export interface Token extends Base {
	token: string;
	name: string;
	ip: string;
}