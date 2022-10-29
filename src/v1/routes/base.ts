import { StatusCodePhrases } from '../index.js';

export type Params = {
	id: string;
};

export interface BaseAuthRouteOptions<D = null> {
	Header: {
		Authorization: string;
	};
	Reply: {
		error: boolean;
		message: StatusCodePhrases;
		data: D | null;
	};
}
