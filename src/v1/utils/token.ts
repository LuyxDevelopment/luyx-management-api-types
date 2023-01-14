export type APIRoute =
	| '/v1/'
	| '/v1/projects/'
	| '/v1/projects/:id'
	| '/v1/projects/:id/assigned'
	| '/v1/projects/:id/assigned/:id'
	| '/v1/token/'
	| '/v1/transactions/'
	| '/v1/transactions/:id'
	| '/v1/users/'
	| '/v1/users/:id';

export type APIMethod = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

export interface TokenPermission {
	route: APIRoute;
	methods: APIMethod;
}
