import { PartialPick, DeepPartial } from '../../utils/index.js';
import { APIUser } from '../../models/APIUser.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface DeleteUserRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface GetUserRouteOptions extends BaseAuthRouteOptions<APIUser | APIUser[]> {
	Params: Params;
	Querystring: Partial<Pick<APIUser, 'alias' | 'avatarURL' | 'firstName' | 'lastName' | 'hiredAt' | 'authorityLevel' | 'position' | 'isPrivate' | 'projects' | 'subPositions'>>;
}

export interface PostUserRouteOptions extends BaseAuthRouteOptions<APIUser> {
	Body: PartialPick<APIUser, 'authorityLevel' | 'contact' | 'hiredAt' | 'isPrivate', 'alias' | 'avatarURL' | 'firstName' | 'info' | 'position' | 'subPositions' | 'lastName'>;
}

export interface PatchUserRouteOptions extends BaseAuthRouteOptions<APIUser> {
	Params: Params;
	Body: DeepPartial<Pick<APIUser, 'alias' | 'avatarURL' | 'firstName' | 'lastName' | 'contact' | 'hiredAt' | 'info' | 'authorityLevel' | 'position' | 'isPrivate' | 'subPositions'>>;
}