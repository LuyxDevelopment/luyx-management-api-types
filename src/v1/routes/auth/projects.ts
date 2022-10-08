import { Project } from '../../models/Project.js';
import { BaseAuthRouteOptions } from './base.js';

export interface DeleteProjectRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: string;
	};
}

export interface GetProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
}

export interface PatchProjectRouteOptions extends GetProjectRouteOptions {
	Body: Omit<Project, 'createdAt' | 'wallet' | 'assignedUsers' | '_id'>;
}

export interface PostProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Body: Omit<Project, 'createdAt' | 'wallet' | 'assignedUsers' | '_id'>;
}

export interface PostProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}

export interface DeleteProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: {
		id: string;
	};
	Body: {
		userId: string;
	};
}
