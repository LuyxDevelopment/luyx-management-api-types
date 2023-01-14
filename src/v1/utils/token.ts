export const APIRouts = [
	'/v1/',
	'/v1/projects/',
	'/v1/projects/:id',
	'/v1/projects/:id/assigned',
	'/v1/projects/:id/assigned/:id',
	'/v1/token/',
	'/v1/transactions/',
	'/v1/transactions/:id',
	'/v1/users/',
	'/v1/users/:id',
] as const;

export type APIRoute = typeof APIRouts[number];

export const APIMethods = [
	'GET',
	'HEAD',
	'POST',
	'PUT',
	'DELETE',
	'CONNECT',
	'OPTIONS',
	'TRACE',
	'PATCH',
] as const;

export type APIMethod = typeof APIMethods[number];

export interface RoutePermission {
	route: APIRoute;
	methods: APIMethod;
}
