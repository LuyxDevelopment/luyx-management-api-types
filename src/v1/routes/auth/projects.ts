import { Project } from '../../models/Project.js';
import { DeepPartial, PartialPick } from '../../utils/util.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetProjectRouteOptions extends BaseAuthRouteOptions<Project | Project[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<Project, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name' | 'assignedUsers'>>;
}

export interface DeleteProjectRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface PatchProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params;
	Body: Partial<Pick<Project, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name'>>;
}

export interface PostProjectRouteOptions extends BaseAuthRouteOptions<Project> {
	Body: PartialPick<Project, 'description' | 'gitHubURL', 'deadline' | 'name'>;
}

export interface DeleteProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params & { user_id: string; };
}

export interface PutProjectAssignedRouteOptions extends BaseAuthRouteOptions<Project> {
	Params: Params & { user_id: string; };
}