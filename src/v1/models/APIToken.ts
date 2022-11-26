import { Base } from './base.js';

export interface APIToken extends Base {
	token: string;
	name: string;
	ip: string;
}