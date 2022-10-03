import { Project } from '../../models/Project.js';
import { BaseAuthRouteOptions } from './base.js';

export interface PostProjectsRouteOptions extends BaseAuthRouteOptions<Project> {
	Body: Omit<Project, 'createdAt' | 'wallet' | 'assignedUsers' | 'assign' | 'unassign'>;
}

export interface GetProjectsRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
}

export interface DeleteProjectsRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
}

export interface PostProjectsAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}

export interface DeleteProjectsAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}
