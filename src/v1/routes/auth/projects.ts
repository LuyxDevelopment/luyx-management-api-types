import { APIProject } from '../../models/APIProject.js';
import { DeepPartial, PartialPick } from '../../utils/util.js';
import { BaseAuthRouteOptions, Params } from '../base.js';

export interface GetProjectRouteOptions extends BaseAuthRouteOptions<APIProject | APIProject[]> {
	Params: Params;
	Querystring: DeepPartial<Pick<APIProject, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name' | 'assignedUsers'>>;
}

export interface DeleteProjectRouteOptions extends BaseAuthRouteOptions {
	Params: Params;
}

// export interface PatchProjectRouteOptions extends BaseAuthRouteOptions<APIProject> {
// 	Params: Params;
// 	Body: Partial<Pick<APIProject, 'createdAt' | 'deadline' | 'description' | 'gitHubURL' | 'name'>>;
// }

export interface PostProjectRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Body: PartialPick<APIProject, 'gitHubURL', 'deadline' | 'description' | 'name'>;
}

export interface DeleteProjectAssignedRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Params: Params & { user_id: string; };
}

export interface PutProjectAssignedRouteOptions extends BaseAuthRouteOptions<APIProject> {
	Params: Params & { user_id: string; };
}