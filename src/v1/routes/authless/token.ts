import { PartialPick } from '../../index.js';
import { APIToken } from '../../models/APIToken.js';
import { BaseAuthRouteOptions } from '../index.js';

export interface PostTokenRouteOptions extends BaseAuthRouteOptions<APIToken> {
	Body: PartialPick<APIToken, 'user', 'ip' | 'name' | 'permissions'>;
}