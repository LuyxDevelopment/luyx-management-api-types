import { User } from '../../models/User.js';
import { BaseAuthRouteOptions } from './base.js';

export interface GetUserRouteOptions extends BaseAuthRouteOptions<User> {
	Params: {
		id: string;
	};
}

export interface DeleteUserRouteOptions extends BaseAuthRouteOptions<User> {
	Params: {
		id: string;
	};
}

export interface PostUserRouteOptions extends BaseAuthRouteOptions<User> {
	Body: Omit<User, 'assignedProjects' | 'hiredAt' | 'wallet' | 'getFullName' | '_id'>;
}