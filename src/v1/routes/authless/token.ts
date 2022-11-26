import { APIToken } from '../../models/APIToken.js';
import { BaseAuthRouteOptions } from '../index.js';

export interface PostTokenRouteOptions extends BaseAuthRouteOptions<APIToken> {
	Body: {
		name: string;
	};
}
