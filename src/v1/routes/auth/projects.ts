import { APIProject } from '../../models/APIProject.js';
import { PartialPick } from '../../utils/util_types.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetProjectRouteOptions extends BaseAuthRouteOptions<APIProject | APIProject[]> {
	Params: Params;
	Querystring: Partial<Pick<APIProject, 'createdAt' | 'deadline' | 'description' | 'isPrivate' | 'name' | 'stage'>>;
}

export interface DeleteProjectRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

export interface PatchProjectRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Params: Params;
	Body: Partial<Pick<APIProject, 'deadline' | 'description' | 'imageURL' | 'isPrivate' | 'stage'>>;
}

export interface PostProjectRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Body: PartialPick<APIProject, 'isPrivate' | 'description' | 'stage', 'deadline' | 'imageURL' | 'name'>;
	Querystring: { import: boolean; };
}

export interface DeleteProjectAssignedRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Params: Params & { user_id: string; };
}

export interface PutProjectAssignedRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Params: Params & { user_id: string; };
}