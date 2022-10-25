export type Params = {
	id: string;
};

export interface BaseAuthRouteOptions<D = undefined> {
	Header: {
		Authorization: string;
	};
	Reply: {
		error: boolean;
		message: string;
		data?: D;
	};
}
