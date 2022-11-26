import { PartialPick, DeepPartial } from '../../utils/index.js';
import { User } from '../../models/User.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface DeleteUserRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface GetUserRouteOptions extends BaseAuthRouteOptions<User | User[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<User, 'alias' | 'avatar' | 'firstName' | 'lastName' | 'contact' | 'hiredAt' | 'info' | 'authorityLevel' | 'position' | 'isPrivate' | 'projects' | 'subPositions'>>;
}

export interface PostUserRouteOptions extends BaseAuthRouteOptions<User> {
	Body: PartialPick<User, 'authorityLevel' | 'hiredAt' | 'isPrivate' | 'avatar', 'alias' | 'contact' | 'firstName' | 'info' | 'position' | 'subPositions' | 'lastName'>;
}

export interface PatchUserRouteOptions extends BaseAuthRouteOptions<User> {
	Params: Params;
	Body: DeepPartial<Pick<User, 'alias' | 'avatar' | 'firstName' | 'lastName' | 'contact' | 'hiredAt' | 'info' | 'authorityLevel' | 'position' | 'isPrivate' | 'subPositions'>>;
}