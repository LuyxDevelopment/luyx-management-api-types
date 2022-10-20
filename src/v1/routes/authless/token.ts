import { Token } from '../../models/Token.js';
import { BaseAuthRouteOptions } from '../index.js';

export interface PostTokenRouteOptions extends BaseAuthRouteOptions<Token> {
	Body: {
		name: string;
	};
}
