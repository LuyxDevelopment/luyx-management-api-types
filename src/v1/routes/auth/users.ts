import { User } from '../../models/User.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface DeleteUserRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface GetUserRouteOptions extends BaseAuthRouteOptions<User | User[]> {
	Params: Params;
	Querystring: Pick<User, 'alias' | 'contact' | 'firstName' | 'hiredAt' | 'info' | 'jobTitles' | 'lastName' | 'projects'>;
}

export interface PostUserRouteOptions extends BaseAuthRouteOptions<User> {
	Body: Pick<User, 'alias' | 'contact' | 'firstName' | 'hiredAt' | 'info' | 'jobTitles' | 'lastName'>;
}

export interface PatchUserRouteOptions extends BaseAuthRouteOptions<User> {
	Params: Params;
	Body: Partial<Pick<User, 'alias' | 'contact' | 'firstName' | 'hiredAt' | 'info' | 'jobTitles' | 'lastName'>>;
}