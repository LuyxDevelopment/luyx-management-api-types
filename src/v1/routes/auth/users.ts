import { User } from '../../models/User.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostUsersRouteOptions extends BaseAuthRouteOptions {
	Body: Omit<User, 'assignedProjects' | 'hiredAt' | 'wallet' | 'getFullName'>;
	Reply: User;
}

export interface GetUsersRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
	Reply: User | null;
}

export interface DeleteUsersRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
}
