import { Project } from '../../models/Project.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostProjectsRouteOptions extends BaseAuthRouteOptions {
	Body: {
		name: string;
		description: string;
		deadline: number;
	};
	Header: {
		Authorization: string;
	};
	Reply: Project;
}

export interface GetProjectsRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
	Header: {
		Authorization: string;
	};
	Reply: Project | null;
}

export interface DeleteProjectsRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
	Header: {
		Authorization: string;
	};
}

export interface PostProjectsAssignedRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}

export interface DeleteProjectsAssignedRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}
