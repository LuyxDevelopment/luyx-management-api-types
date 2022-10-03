export interface BaseAuthRouteOptions<D = null> {
	Header: {
		Authorization: string;
	};
	Reply: {
		error: boolean;
		message: string;
		data: D | null
	}
}
