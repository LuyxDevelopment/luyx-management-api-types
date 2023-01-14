import { TokenPermission as RoutePermission } from '../utils/token.js';
import { Base } from './base.js';

export interface APIToken extends Base {
	token: string;
	name: string;
	ip: string;
	permissions: RoutePermission[];
	user: string | null;
}