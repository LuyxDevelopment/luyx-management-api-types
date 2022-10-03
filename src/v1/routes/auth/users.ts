import { User } from '../../models/User.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostUsersRouteOptions extends BaseAuthRouteOptions<User> {
	Body: Omit<User, 'assignedProjects' | 'hiredAt' | 'wallet' | 'getFullName'>;
}

export interface GetUsersRouteOptions extends BaseAuthRouteOptions<User> {
	Params: {
		id: string;
	};
}

export interface DeleteUsersRouteOptions extends BaseAuthRouteOptions<User> {
	Params: {
		id: string;
	};
}
