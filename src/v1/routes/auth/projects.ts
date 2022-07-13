import mongoose from 'mongoose';
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
	Reply: {
		data: Project;
	};
}

export interface GetProjectsRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: mongoose.Types.ObjectId;
	};
	Header: {
		Authorization: string;
	};
	Reply: {
		data: Project | null;
	}
}

export interface DeleteProjectsRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: mongoose.Types.ObjectId;
	};
	Header: {
		Authorization: string;
	};
}

export interface PostProjectsAssignedRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: mongoose.Types.ObjectId;
	};
	Body: {
		userId: mongoose.Types.ObjectId;
	};
}

export interface DeleteProjectsAssignedRouteOptions extends BaseAuthRouteOptions {
	Params: {
		id: mongoose.Types.ObjectId;
	};
	Body: {
		userId: mongoose.Types.ObjectId;
	};
}
