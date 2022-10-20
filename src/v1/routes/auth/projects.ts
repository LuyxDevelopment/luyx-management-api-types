import { Project } from '../../models/Project.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetProjectRouteOptions extends BaseAuthRouteOptions<Project | Project[]> {
	Params: Params;
	Querystring: Pick<Project, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name'>;
}

export interface DeleteProjectRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface PatchProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params;
	Body: Pick<Project, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name'>;
}

export interface PostProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Body: Pick<Project, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name'>;
}

export interface DeleteProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params;
	Body: {
		userId: string;
	};
}

export interface PutProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params;
	Body: {
		userId: string;
	};
}