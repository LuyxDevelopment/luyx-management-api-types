import { Token } from '../../models/Token.js';

export interface PostTokenRouteOptions {
	Header: {
		Authorization: string;
	};
	Body: {
		name: string;
	};
	Reply: {
		data: Token | null;
	};
}
