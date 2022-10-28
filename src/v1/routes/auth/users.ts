import { PartialPick, DeepPartial } from '../../utils/index.js';
import { User } from '../../models/User.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface DeleteUserRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface GetUserRouteOptions extends BaseAuthRouteOptions<User | User[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<User, 'alias' | 'authorityLevel' | 'contact' | 'firstName' | 'hiredAt' | 'info' | 'positions' | 'lastName' | 'projects'>>;
}

export interface PostUserRouteOptions extends BaseAuthRouteOptions<User> {
	Body: PartialPick<User, 'authorityLevel' | 'hiredAt', 'alias' | 'contact' | 'firstName' | 'info' | 'positions' | 'lastName'>;
}

export interface PatchUserRouteOptions extends BaseAuthRouteOptions<User> {
	Params: Params;
	Body: DeepPartial<Pick<User, 'alias' | 'authorityLevel' | 'contact' | 'firstName' | 'hiredAt' | 'info' | 'positions' | 'lastName'>>;
}